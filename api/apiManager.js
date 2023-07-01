import axios from 'axios';
import { getData, storeData } from '../src/utils/asyncStorageService';

// const homeIp = '192.168.1.6:4004';
const officeIp = '192.168.0.193:3000';

const baseURL = `http://${officeIp}/api/`;

export const instance = axios.create({
  baseURL,
});

export const auth = axios.create({
  baseURL,
});

instance.interceptors.request.use(async (config) => {
  try {
    const token = await getData('TOKEN');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    return Promise.resolve(error);
  }
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await getData('REFRESH');
      if (refreshToken) {
        try {
          const response = await axios.get(`${baseURL}refresh-token`, {
            method: 'GET',
            headers: {
              authorization: `Bearer ${refreshToken}`,
            },
          });

          const { data } = response.data;
          await storeData('TOKEN', data.access_token);
          originalRequest.headers[
            'Authorization'
          ] = `Bearer ${data.access_token}`;
          console.log('originalRequest.headers', originalRequest.headers);
          return instance(originalRequest);
        } catch (error) {
          console.log(error, 'error');
        }
      }
    }
    return Promise.reject(error);
  },
);

// export default { instance, auth };
// export const apiManager = axios.create({
//   baseURL,
//   headers: {
//     Authorization: `Bearer`,
//   },
//   responseType: 'json',
//   withCredentials: true,
// });
