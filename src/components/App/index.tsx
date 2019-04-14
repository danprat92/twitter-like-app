import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from '../../containers/LoginContainer';
import HomeContainer from '../../containers/HomeContainer';
import './index.css';

class App extends React.Component {
  public constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => this.renderComponent(HomeContainer, props)}
          />
          <Route
            exact
            path="/login"
            render={props => this.renderComponent(LoginContainer, props)}
          />
        </Switch>
      </BrowserRouter>
    );
  }
  private renderComponent(Component: any, props: any) {
    // TODO Check if user is logued in
    return <Component {...props} />;
  }
}

export default App;
