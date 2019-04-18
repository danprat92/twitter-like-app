import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
      <React.Fragment>
        <Switch>
          {Object.keys(routes).map((current: string) => (
            <Route
              exact
              key={current}
              path={routes[current].route}
              render={props => this.renderComponent(routes[current], props)}
            />
          ))}
          <Route
            render={({ staticContext }) => {
              if (staticContext) {
                staticContext.statusCode = 404;
              }
              return <h1>Not found</h1>;
            }}
          />
        </Switch>
      </React.Fragment>
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
