import { configureStore } from '@reduxjs/toolkit';
import busSlice from 'features/bus/busSlice';

export default configureStore({
  reducer: {
    bus: busSlice
  }
});
