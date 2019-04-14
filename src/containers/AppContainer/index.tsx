import * as React from 'react';
import { connect } from 'react-redux';
import App from '../../components/App';
import { IState } from '../../redux/types';

interface IAppContainerReduxProps {
  userIsLoggedIn: boolean;
}

const AppContainer: React.FunctionComponent<IAppContainerReduxProps> = ({
  userIsLoggedIn,
}) => <App userIsLoggedIn={userIsLoggedIn} />;

const mapStateToProps = (state: IState) => {
  const { userIsLoggedIn } = state.app;

  return {
    userIsLoggedIn,
  };
};

export default connect(mapStateToProps)(AppContainer);
