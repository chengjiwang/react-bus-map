import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetBuses } from 'api/EventService';

const initialState = {
  originalData: [],
  filterData: [],
  status: 'idle'
};

export const fetchBuses = createAsyncThunk('bus/fetchBuses', async () => {
  const response = await apiGetBuses();
  // console.log(response.data);
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
    }
  },
  extraReducers: {
    [fetchBuses.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.originalData = action.payload;
      state.filterData = action.payload;
    }
  }
});

export const { filterBus } = busSlice.actions;
export default busSlice.reducer;
