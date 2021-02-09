import React from 'react';
import { Input } from 'antd';
import { format } from 'date-fns';

import './busDetail.scss';

export const BusDetail = ({ busDetail }) => {

  const RouteName = busDetail.RouteName === undefined ? '' : busDetail.RouteName.Zh_tw;

  return (
    <div className="detail">
      <label htmlFor="plateNumb">車牌號碼</label>
      <Input 
        id="plateNumb" 
        value={busDetail.PlateNumb} 
        className="detail-input" 
        placeholder="車牌號碼" 
      />
      <label htmlFor="operatorID">駕駛ID</label>
      <Input 
        id="operatorID" 
        value={busDetail.OperatorID} 
        className="detail-input" 
        placeholder="駕駛ID" 
      />
      <label htmlFor="routeName">行車路線</label>
      <Input 
        id="routeName" 
        value={RouteName} 
        className="detail-input" 
        placeholder="行車路線" 
      />
      <label htmlFor="speed">行車速度</label>
      <Input 
        id="speed" 
        value={busDetail.Speed} 
        className="detail-input" 
        placeholder="行車速度" 
      />
      <div className="update-time">
        <span>最後更新 { format(new Date(busDetail.UpdateTime ), 'MM/dd H:mm') }</span>
      </div>    
    </div>
  )
}

