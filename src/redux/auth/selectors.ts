import { IState } from '../types';

export const isLoadingInitialState = (state: IState) =>
  state.auth.loadingInitialState;
