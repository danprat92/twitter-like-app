import {
  IAuthState,
  AuthActionTypes,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './types';

const initialState: IAuthState = {
  userIsLoggedIn: false,
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): IAuthState {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userIsLoggedIn: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        userIsLoggedIn: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userIsLoggedIn: false,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        userIsLoggedIn: true,
      };
    default:
      return state;
  }
}
