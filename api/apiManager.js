import axios from 'axios';
import { getData, storeData } from '../src/utils/asyncStorageService';

const baseURL = 'http://192.168.0.193:4004/v1/';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(async (config) => {
  console.log('instance.interceptors.request\n\n ');
  try {
    const token = await getData('TOKEN');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    console.log('console.log(config)', config);

    return config;
  } catch (error) {
    console.log('USLO U EROR');
    return Promise.resolve(error);
  }
});

instance.interceptors.response.use(
  (response) => {
    console.log('RESPOSNe\n\n\n');
    return response;
  },
  async (error) => {
    console.log(error, 'JES BRE response interceportr error');
    const originalRequest = error.config;
    console.log('error.response.status', error.response.status);
    console.log('originalRequest._retry', originalRequest._retry);
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await getData('REFRESH');
      if (refreshToken) {
        console.log(refreshToken, 'refreshToken');
        try {
          const response = await axios.get(`${baseURL}refresh-token`, {
            method: 'GET',
            headers: {
              authorization: `Bearer ${refreshToken}`,
            },
          });
          console.log(
            response.data,
            'response000000000000000000000000000000000000000000000',
          );
          const { data } = response.data;
          await storeData('TOKEN', data.access_token);
          originalRequest.headers[
            'Authorization'
          ] = `Bearer ${data.access_token}`;
          console.log('originalRequest.headers', originalRequest.headers);
          return instance(originalRequest);
        } catch (error) {
          console.log('ERRROROROROROROR FOR REFRESH TOKEN');
          console.error(error);
        }
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
// export const apiManager = axios.create({
//   baseURL,
//   headers: {
//     Authorization: `Bearer`,
//   },
//   responseType: 'json',
//   withCredentials: true,
// });
