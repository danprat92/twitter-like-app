import './setupMaterialHook';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Base64 } from 'js-base64';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
let initialState =
  (window as any).DATA !== null && (window as any).DATA !== '{{ WINDOW_DATA }}'
    ? Base64.decode((window as any).DATA)
    : '{}';
initialState = initialState || '{}';
const parsedInitialState = JSON.parse(initialState);
const store = configureStore(parsedInitialState);

if (initialState === '{}') {
  // Non-server rendered.
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>,
    document.getElementById('root') as HTMLElement
  );
} else {
  // Server rendered hydration
  ReactDOM.hydrate(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>,
    document.getElementById('root') as HTMLElement
  );
}

serviceWorker.register();
