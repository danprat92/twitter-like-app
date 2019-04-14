import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Home from '../../components/Login';

interface IHomeContainerProps extends RouteComponentProps<any> {}

const HomeContainer: React.FunctionComponent<IHomeContainerProps> = () => (
  <Home />
);

export default HomeContainer;
