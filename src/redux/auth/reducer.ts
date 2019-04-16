import {
  IAuthState,
  AuthActionTypes,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  INITIAL_STATE_LOADED,
} from './types';

const initialState: IAuthState = {
  userIsLoggedIn: false,
  loadingInitialState: true,
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
    case INITIAL_STATE_LOADED:
      return {
        ...state,
        loadingInitialState: false,
      };
    default:
      return state;
  }
}
