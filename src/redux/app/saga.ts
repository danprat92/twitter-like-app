import { fork, call } from 'redux-saga/effects';

function* initializeFirebase() {
  yield call(test => test, 'test');
}

export default function* startApp() {
  yield fork(initializeFirebase);
}
