import {
  PROVIDERS,
  PERFORM_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  PERFORM_LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  INITIAL_STATE_LOADED,
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

export const initialStateLoaded = () => {
  return {
    type: INITIAL_STATE_LOADED,
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
