import { fork } from 'redux-saga/effects';
import appSaga from './app/saga';

export default function* start() {
  yield fork(appSaga);
}
