import React from 'react';
import { PROVIDERS } from '../../redux/auth/types';

interface ILogin {
  dispatchLogin: (provider: PROVIDERS) => void;
}

const Login: React.FunctionComponent<ILogin> = ({
  dispatchLogin = (provider: PROVIDERS) => {
    return provider;
  },
}) => {
  const onClick = () => {
    dispatchLogin(PROVIDERS.GOOGLE);
  };

  return <h1 onClick={onClick}>Login Google</h1>;
};

export default Login;
