/* tslint:disable:no-floating-promises array-type */
import '../src/setupMaterialHook';
import '../src/index.css';
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  createMuiTheme,
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import * as path from 'path';
import * as fs from 'fs';
import { Base64 } from 'js-base64';

import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import configureStore from '../src/configureStore';
import AppContainer from '../src/containers/AppContainer';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export default function universalLoader(req: any, res: any) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err: any, htmlData: any) => {
    if (err) {
      // tslint:disable-next-line:no-console
      console.error('read err', err);
      return res.status(404).end();
    }
    const context: any = {};
    const store = configureStore();
    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry();

    // Create a sheetsManager instance.
    const sheetsManager = new Map();
    const generateClassName = createGenerateClassName();
    const markup = renderToString(
      <JssProvider
        registry={sheetsRegistry}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <AppContainer />
            </StaticRouter>
          </Provider>
        </MuiThemeProvider>
      </JssProvider>
    );

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      res.redirect(301, context.url);
    } else {
      const helmet = Helmet.renderStatic();
      const headData = `${helmet.meta.toString()}${helmet.title.toString()}`;

      const storeForClient = store.getState();
      const css = sheetsRegistry.toString();
      // we're good, send the response
      const RenderedApp = htmlData
        .replace('{{ SSR }}', markup)
        .replace(
          '{{ WINDOW_DATA }}',
          Base64.encode(JSON.stringify(storeForClient))
        )
        .replace(
          '<style id="jss-server-side"></style>',
          `<style id="jss-server-side">${css}</style>`
        )
        .replace('<meta-head/>', headData);
      res.status(context.statusCode || 200).send(RenderedApp);
    }
  });
}
