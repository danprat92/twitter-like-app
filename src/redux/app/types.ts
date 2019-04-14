export interface IAppInitFinished {
  type: string;
}

export type AppActionTypes = IAppInitFinished;

export interface IAppState {
  userIsLoggedIn: boolean;
}
