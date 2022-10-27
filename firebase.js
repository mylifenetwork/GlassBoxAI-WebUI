// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQS9yHLvLPhOyNTLQ179LkCci5XlZ-RS4",
  authDomain: "web-ui-363907.firebaseapp.com",
  projectId: "web-ui-363907",
  storageBucket: "web-ui-363907.appspot.com",
  messagingSenderId: "77719838863",
  appId: "1:77719838863:web:78b4feea123429b84790fa"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };