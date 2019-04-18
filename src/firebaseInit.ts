import firebase from 'firebase/app';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import { config } from './config';

const firebaseApp = firebase.initializeApp({
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_URL,
  databaseURL: config.FIREBASE_DB_URL,
});

const rsf = new ReduxSagaFirebase(firebaseApp);
export default rsf;
