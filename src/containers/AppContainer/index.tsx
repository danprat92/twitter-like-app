import * as React from 'react';
import { connect } from 'react-redux';
import App from '../../components/App';
import { IState } from '../../redux/types';

interface IAppContainerReduxProps {
  userIsLoggedIn: boolean;
  loadingInitialState: boolean;
  router?: string;
  location?: string;
  context?: any;
}

const AppContainer: React.FunctionComponent<IAppContainerReduxProps> = ({
  userIsLoggedIn,
  loadingInitialState,
}) => (
  <App
    loadingInitialState={loadingInitialState}
    userIsLoggedIn={userIsLoggedIn}
  />
);

const mapStateToProps = (state: IState) => {
  const { userIsLoggedIn, loadingInitialState } = state.auth;

  return {
    userIsLoggedIn,
    loadingInitialState,
  };
};

export default connect(mapStateToProps)(AppContainer);
