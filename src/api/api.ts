import axios from "axios";


const BASE_URL = 'https://api.binance.com/api/v3/ticker';

export const $axiosCoin = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',

  },
});

