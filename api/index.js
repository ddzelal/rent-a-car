// import { instance, auth } from './apiManager';

import { auth, instance } from './apiManager';

// const baseURL = 'http://192.168.0.193:4004/v1/';

export const fetchLogin = async (body) => {
  console.log('tu sam', body);
  try {
    const { data } = await auth('auth', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: body,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error?.response?.status;
  }
};

export const fetchForgotPassword = async (body) => {
  try {
    const { data } = await auth('auth/forgot-password-code', {
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
    const { data } = await auth('auth/forgot-password', {
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
  console.log(body);
  try {
    const { data } = await auth('users', {
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

export const getCurrentUser = async (email) => {
  console.log(email, 'sta radis to');
  try {
    const { data } = await instance(`users/${email}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    return data;
  } catch (error) {
    return false;
  }
};
