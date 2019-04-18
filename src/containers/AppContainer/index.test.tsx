import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import AppContainer from './index';
import configureStore from '../../configureStore';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
