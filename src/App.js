import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchBuses } from 'features/bus/busSlice';
import { BusList } from 'features/bus/BusList/BusList';
import 'antd/dist/antd.css';

function App() {
  const dispatch = useDispatch();
  const originalData = useSelector(state => state.bus.originalData);
  const filterData = useSelector(state => state.bus.filterData);
  const status = useSelector(state => state.bus.status);

  useEffect(() => {
    if(status === 'idle') {
      dispatch(fetchBuses());
    }
  }, [status, dispatch]);

  return (
    <div className="app">
      <BusList originalData={originalData} filterData={filterData} />
    </div>
  );
}

export default App;
