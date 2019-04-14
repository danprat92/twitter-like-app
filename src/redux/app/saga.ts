import { fork, call } from 'redux-saga/effects';

function* initializeFirebase() {
  yield call(console.log, 'test');
}

export default function* startApp() {
  yield fork(initializeFirebase);
}
