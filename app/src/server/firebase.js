import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBaRpZBLlaRigR3MxOCV1S3e8CzYFYLhEs',
  authDomain: 'collabplaylist-df87f.firebaseapp.com',
  databaseURL: 'https://collabplaylist-df87f.firebaseio.com',
  projectId: 'collabplaylist-df87f',
  storageBucket: 'collabplaylist-df87f.appspot.com',
  messagingSenderId: '686044907744'
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
