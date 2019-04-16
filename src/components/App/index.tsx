import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PublicLayout from '../PublicLayout';
import './index.css';
import { IRoute, routes } from '../../routes';
import PrivateLayout from '../PrivateLayout';
import Splash from '../Splash';

interface IAppProps {
  userIsLoggedIn: boolean;
  loadingInitialState: boolean;
}

class App extends React.Component<IAppProps> {
  public constructor(props: IAppProps) {
    super(props);
  }
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={routes.home.route}
            render={props => this.renderComponent(routes.home, props)}
          />
          <Route
            exact
            path={routes.login.route}
            render={props => this.renderComponent(routes.login, props)}
          />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
  private renderComponent(componentToRender: IRoute, props: any) {
    const {
      isPrivate,
      Component,
      title,
      route,
      description,
    } = componentToRender;

    if (this.props.loadingInitialState) {
      return <Splash description={description} title={title} url={route} />;
    }

    if (isPrivate && !this.props.userIsLoggedIn) {
      return <Redirect to="/login" />;
    } else if (!isPrivate && this.props.userIsLoggedIn) {
      return <Redirect to="/" />;
    }

    if (isPrivate) {
      return (
        <PrivateLayout description={description} title={title} url={route}>
          <Component {...props} />
        </PrivateLayout>
      );
    }

    return (
      <PublicLayout description={description} title={title} url={route}>
        <Component {...props} />
      </PublicLayout>
    );
  }
}

export default App;
