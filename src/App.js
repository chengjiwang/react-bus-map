import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';

import { fetchBuses } from 'features/bus/busSlice';
import { BusList } from 'features/bus/BusList/BusList';
import { Map } from 'features/bus/Map/Map';
import { BusDetail } from 'features/bus/BusDetail/BusDetail';
import 'antd/dist/antd.css';

function App() {
  const dispatch = useDispatch();
  const originalData = useSelector(state => state.bus.originalData);
  const filterData = useSelector(state => state.bus.filterData);
  const busDetail = useSelector(state => state.bus.busDetail)
  const status = useSelector(state => state.bus.status);
  
  useEffect(() => {
    if(status === 'idle') {
      dispatch(fetchBuses());
    }
    let timerID = setInterval(
      () => dispatch(fetchBuses()),
      600000
    );
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [status, dispatch]);
  
  return (
    <div className="app">
      <h1>嘉義市 Live Bus Map</h1>
      <Row gutter={32}>
        <Col span={6}>
          <BusDetail busDetail={busDetail} />
        </Col>
        <Col span={18}>
          <Map filterData={filterData} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <BusList 
            originalData={originalData} 
            filterData={filterData} 
          />
        </Col>
      </Row>  
    </div>
  );
}

export default App;
