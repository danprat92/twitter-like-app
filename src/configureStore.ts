import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

const composeEnhancers = composeWithDevTools({});

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let store = null;

  if (process.env.NODE_ENV !== 'production') {
    store = {
      ...createStore(
        rootReducer,
        {},
        composeEnhancers(applyMiddleware(sagaMiddleware))
      ),
      runSaga: sagaMiddleware.run(rootSaga),
    };
  } else {
    // We don't want devtools on production
    store = {
      ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
      runSaga: sagaMiddleware.run(rootSaga),
    };
  }

  return store;
};

export default configureStore;
