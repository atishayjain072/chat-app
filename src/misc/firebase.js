import firebase from 'firebase/app';

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
