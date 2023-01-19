import instance, { apiManager } from './apiManager';

// const baseURL = 'http://192.168.0.193:4004/v1/';

export const fetchLogin = async (body) => {
  try {
    const { data } = await instance('auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: body,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error.response.status;
  }
};

export const fetchForgotPassword = async (body) => {
  try {
    const { data } = await apiManager('auth/forgot-password-code', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: body,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchChangeNewPassword = async (body) => {
  try {
    const { data } = await instance('auth/forgot-password', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: body,
    });
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const createAnAccountAPI = async (body) => {
  try {
    const { data } = await instance('auth/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: body,
    });
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getCurrentUser = async () => {
  console.log('getCurrentUser\n');
  try {
    const { data } = await instance('user/current', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    console.log(data, 'DATA OD GET USERT');
    return data;
  } catch (error) {
    console.log(error);
  }
};
