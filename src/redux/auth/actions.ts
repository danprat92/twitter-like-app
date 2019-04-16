import {
  PROVIDERS,
  PERFORM_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  PERFORM_LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './types';

export const performLogin = (provider: PROVIDERS) => {
  return {
    type: PERFORM_LOGIN,
    payload: {
      provider,
    },
  };
};

export const performLogout = () => {
  return {
    type: PERFORM_LOGOUT,
  };
};

export const loginSucceded = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginError = () => {
  return {
    type: LOGIN_ERROR,
  };
};

export const logoutSucceded = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logoutError = () => {
  return {
    type: LOGOUT_ERROR,
  };
};
