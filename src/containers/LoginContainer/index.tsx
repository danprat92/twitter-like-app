import * as React from 'react';
import { connect } from 'react-redux';
import Login from '../../components/Login';
import { IState, IActions } from '../../redux/types';
import { PROVIDERS } from '../../redux/auth/types';
import { performLogin } from '../../redux/auth/actions';

interface ILoginDispatchProps {
  dispatchLogin: (provider: PROVIDERS) => void;
}

const LoginContainer: React.FunctionComponent<ILoginDispatchProps> = ({
  dispatchLogin,
}) => <Login dispatchLogin={dispatchLogin} />;

const mapStateToProps = (state: IState) => ({});

const mapDispatchToProps = (dispatch: (action: IActions) => void) => {
  return {
    dispatchLogin: (provider: PROVIDERS) => dispatch(performLogin(provider)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
