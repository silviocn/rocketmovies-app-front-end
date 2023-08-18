import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketmovies-back-end-t1z7.onrender.com' //'http://localhost:3333'
});