import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
// Import the functions you need from the SDKs you need

import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2fgb86R18ZMYRfK70d8vDsdhzi-oclQ4",
  authDomain: "loginauth-e990e.firebaseapp.com",
  projectId: "loginauth-e990e",
  storageBucket: "loginauth-e990e.appspot.com",
  messagingSenderId: "1008911076145",
  appId: "1:1008911076145:web:22dd9a52c037cc8d073e10",
  measurementId: "G-XDG3Q6YQV1",
};

// Initialize Firebase

//const analytics = getAnalytics(app);

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
}
const googleProvider = new GoogleAuthProvider();
const facebookAuth = new FacebookAuthProvider();
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
  facebookAuth,
};
