import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/Streaming/City/Chiayi'
});

export const apiGetBuses = () => apiClient.get('/');
