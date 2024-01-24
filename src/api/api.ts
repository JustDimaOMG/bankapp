import axios from "axios";


const REACT_APP_API_URL_COIN = import.meta.env.VITE_APP_API_URL_COIN;

export const $axiosCoin = axios.create({
  baseURL: REACT_APP_API_URL_COIN,
  headers: {
    'Content-Type': 'application/json',

  },
});



const BASE_URL_SERVER = import.meta.env.VITE_APP_API_URL;

export const $axiosServer = axios.create({
  baseURL: BASE_URL_SERVER,
  headers: {
    'Content-Type': 'application/json',

  },
});

