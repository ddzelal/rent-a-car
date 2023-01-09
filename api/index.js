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
    return data;
  } catch (error) {
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
    const { data } = await apiManager('auth/forgot-password', {
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
    const { data } = await apiManager('auth/signup', {
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
