import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Table, Select } from 'antd';

import { filterBus } from 'features/bus/busSlice';
import './busList.scss';

const columns = [
  {
    title: '車牌號碼',
    dataIndex: 'PlateNumb',
    sorter: (a, b) => a.PlateNumb.localeCompare(b.PlateNumb, 'co', {ignorePunctuation: true}),
  },
  {
    title: '駕駛ID',
    dataIndex: 'OperatorID',
    sorter: (a, b) => a.OperatorID - b.OperatorID,
  },
  {
    title: '行車路線',
    dataIndex: ['RouteName', 'Zh_tw'],
    sorter: (a, b) => a.RouteName.Zh_tw.length - b.RouteName.Zh_tw.length,
  },
  {
    title: '行車速度 km/h',
    dataIndex: 'Speed',
    sorter: (a, b) => a.Speed - b.Speed,
  },
];

export const BusList = ({ originalData, filterData }) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  let routeName = [];
  const getRouteName = () => {
    const sets = new Set();
    originalData.forEach((item) => {
      sets.add(item.RouteName.Zh_tw);
    });
    routeName = Array.from(sets);
  }
  getRouteName();

  const option = routeName.map((item, index) => {
    return (
      <Option value={item} key={index}>{item}</Option>
    )
  });

  const handleRouteChange = (value) => {
    dispatch(filterBus(value));
  };

  return (
    <div className="list">
      <Row gutter={32}>
        <Col span={18}>
          <Table 
            columns={columns} 
            dataSource={filterData} 
            rowKey="PlateNumb"  
          />
        </Col>
        <Col span={6} className="filter">
          <h2 className="filter-title">Filter</h2>
          <Select
            defaultValue="行車路線" 
            style={{ width: 170 }}
            onChange={handleRouteChange}
          >
            {option}
          </Select>
        </Col>
      </Row> 
    </div>    
  )
}
