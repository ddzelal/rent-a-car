import { apiManager } from './apiManager';

export const fetchLogin = async (body) => {
  try {
    const { data } = await apiManager('auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: body,
    });
    // storeData('accessToken', data.data.access_token);
    return data;
  } catch (error) {
    console.log(error);
  }
};
