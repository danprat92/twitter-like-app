import { call, all, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase';
import rsf from '../../firebaseInit';
import { PERFORM_LOGIN } from './types';

const authProvider = new firebase.auth.GoogleAuthProvider();

function* performAuth() {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider);
  } catch (error) {
    // TODO
  }
}

export default function* authSaga() {
  yield all([takeLatest(PERFORM_LOGIN, performAuth)]);
}
