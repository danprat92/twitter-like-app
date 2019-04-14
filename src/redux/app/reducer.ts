import { IAppState, AppActionTypes } from './types';

const initialState: IAppState = {
  userIsLoggedIn: false,
};

export function appReducer(
  state = initialState,
  action: AppActionTypes
): IAppState {
  switch (action.type) {
    default:
      return state;
  }
}
