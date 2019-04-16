import { call, all, takeLatest, put, take, fork } from 'redux-saga/effects';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import rsf from '../../firebaseInit';
import { PERFORM_LOGIN, PERFORM_LOGOUT } from './types';
import {
  loginSucceded,
  loginError,
  logoutSucceded,
  logoutError,
} from './actions';

const authProvider = new firebase.auth.GoogleAuthProvider();

function* performAuth() {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider);
    yield put(loginSucceded());
  } catch (error) {
    yield put(loginError());
  }
}

function* performLogout() {
  try {
    yield call(rsf.auth.signOut);
    yield put(logoutSucceded());
  } catch (error) {
    yield put(logoutError());
  }
}

function* syncUserSaga() {
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const { user } = yield take(channel);

    if (user) yield put(loginSucceded());
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(PERFORM_LOGIN, performAuth),
    takeLatest(PERFORM_LOGOUT, performLogout),
    fork(syncUserSaga),
  ]);
}
