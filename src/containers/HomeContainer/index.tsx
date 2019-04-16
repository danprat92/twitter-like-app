import * as React from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home';
import { IState, IActions } from '../../redux/types';
import { performLogout } from '../../redux/auth/actions';

interface ILoginDispatchProps {
  dispatchLogout: () => void;
}

const HomeContainer: React.FunctionComponent<ILoginDispatchProps> = ({
  dispatchLogout,
}) => <Home dispatchLogout={dispatchLogout} />;

const mapStateToProps = (state: IState) => ({});

const mapDispatchToProps = (dispatch: (action: IActions) => void) => {
  return {
    dispatchLogout: () => dispatch(performLogout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
