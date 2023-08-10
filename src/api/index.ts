import axios from 'axios';

const API_SERVER = 'http://192.168.0.151';

export const API = axios.create({
  baseURL: `${API_SERVER}:3000`,
  timeout: 1000,
});
