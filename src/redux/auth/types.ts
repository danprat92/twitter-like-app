export const PERFORM_LOGIN = 'PERFORM_LOGIN';

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

export interface IAuthState {
  userIsLoggedIn: boolean;
}

export type AuthActionTypes = IPerformLogin;
