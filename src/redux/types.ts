import { IAuthState, AuthActionTypes } from './auth/types';

export interface IState {
  auth: IAuthState;
}

export type IActions = AuthActionTypes;
