import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetBuses } from 'api/EventService';

const initialState = {
  originalData: [],
  filterData: [],
  busDetail: {},
  status: 'idle',
  updateTime: ''
};

export const fetchBuses = createAsyncThunk('bus/fetchBuses', async () => {
  const response = await apiGetBuses();
  return response.data
});

const busSlice = createSlice({
  name: 'bus',
  initialState,
  reducers: {
    filterBus(state, action) {
      const filterBus = state.originalData.filter(
        item => item.RouteName.Zh_tw === action.payload
      );
      if (filterBus) {
        state.filterData = filterBus;
      }
    },
    busDetail(state, action) {
      const detail = state.originalData.find(
        item => item.PlateNumb === action.payload
      );
      state.busDetail = detail;
    },
  },
  extraReducers: {
    [fetchBuses.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.originalData = action.payload;
      state.filterData = action.payload;
      state.updateTime = new Date().toISOString();
    }
  }
});

export const { filterBus, busDetail } = busSlice.actions;
export default busSlice.reducer;
