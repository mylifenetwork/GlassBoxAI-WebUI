import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig={
    apiKey: "AIzaSyBQS9yHLvLPhOyNTLQ179LkCci5XlZ-RS4",
  authDomain: "web-ui-363907.firebaseapp.com",
  projectId: "web-ui-363907",
  storageBucket: "web-ui-363907.appspot.com",
  messagingSenderId: "77719838863",
  appId: "1:77719838863:web:78b4feea123429b84790fa"

};
firebase.initializeApp(firebaseConfig);