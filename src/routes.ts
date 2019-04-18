import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';

export const routes: any = {
  home: {
    title: 'Home',
    Component: HomeContainer,
    route: '/',
    description: 'Home page where you see the posts',
    isPrivate: true,
  },
  login: {
    title: 'Login',
    Component: LoginContainer,
    route: '/login',
    description: 'Register or login to the platform',
    isPrivate: false,
  },
};

export interface IRoute {
  title: string;
  Component: any;
  route: string;
  description: string;
  isPrivate: boolean;
}

export default routes;
