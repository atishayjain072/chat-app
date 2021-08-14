import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyBWRVSM3T6cmXi7DV4VnJB1nI79vXLdIv0',
  authDomain: 'chat-web-app-fbaf5.firebaseapp.com',
  databaseURL: 'https://chat-web-app-fbaf5-default-rtdb.firebaseio.com/',
  projectId: 'chat-web-app-fbaf5',
  storageBucket: 'chat-web-app-fbaf5.appspot.com',
  messagingSenderId: '641457016801',
  appId: '1:641457016801:web:ac4ccdf7581165602e8ca0',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BBABegiZF-qSLsXwXzFlbf4UktuUZ6LY8a-QT4uUCQq7KRnBeR8VNbGKmei2PB-d7eFHwAN3Nv2oODtebo_efKo'
  );
  messaging.onMessage(data => {
    console.log(data);
  });
}
