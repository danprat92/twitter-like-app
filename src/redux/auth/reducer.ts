import { IAuthState, AuthActionTypes } from './types';

const initialState: IAuthState = {
  userIsLoggedIn: false,
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): IAuthState {
  switch (action.type) {
    default:
      return state;
  }
}
