import axios from 'axios';

const API_URL = process.env.API_URL;
console.log(API_URL, 'API URL!!!');

export const apiManager = axios.create({
  baseURL: 'http://192.168.0.193:4004/v1/',
  responseType: 'json',
  withCredentials: true,
});
