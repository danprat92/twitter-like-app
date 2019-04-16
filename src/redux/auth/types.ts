export const PERFORM_LOGIN = 'PERFORM_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const PERFORM_LOGOUT = 'PERFORM_LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const INITIAL_STATE_LOADED = 'INITIAL_STATE_LOADED';

export enum PROVIDERS {
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
}

export interface IPerformLogin {
  type: string;
  payload: {
    provider: PROVIDERS;
  };
}

export interface ILoginSuccess {
  type: string;
}

export interface IInitialStateLoaded {
  type: string;
}

export interface ILoginError {
  type: string;
}

export interface IPerformLogout {
  type: string;
}

export interface ILogoutSuccess {
  type: string;
}

export interface ILogoutError {
  type: string;
}

export interface IAuthState {
  userIsLoggedIn: boolean;
  loadingInitialState: boolean;
}

export type AuthActionTypes =
  | IPerformLogin
  | ILoginSuccess
  | ILoginError
  | IPerformLogout
  | ILogoutError
  | ILogoutSuccess
  | IInitialStateLoaded;
