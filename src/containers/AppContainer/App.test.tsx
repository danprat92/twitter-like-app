import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './index';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
