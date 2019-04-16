import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginContainer from '../../containers/LoginContainer';
import HomeContainer from '../../containers/HomeContainer';
import './index.css';

interface IAppProps {
  userIsLoggedIn: boolean;
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
            path="/"
            render={props => this.renderComponent(HomeContainer, props, true)}
          />
          <Route
            exact
            path="/login"
            render={props => this.renderComponent(LoginContainer, props, false)}
          />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
  private renderComponent(Component: any, props: any, isPrivate: boolean) {
    if (isPrivate && !this.props.userIsLoggedIn) {
      return <Redirect to="/login" />;
    } else if (!isPrivate && this.props.userIsLoggedIn) {
      return <Redirect to="/" />;
    }

    return <Component {...props} />;
  }
}

export default App;
