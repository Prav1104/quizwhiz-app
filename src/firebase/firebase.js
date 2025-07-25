// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoMoIu1ywzDrlCgQRLePfWzCSHBSdWpec",
  authDomain: "quizwhiz-app.firebaseapp.com",
  projectId: "quizwhiz-app",
  storageBucket: "quizwhiz-app.firebasestorage.app",
  messagingSenderId: "725739606193",
  appId: "1:725739606193:web:947be3043d35826ad31290",
  measurementId: "G-BSLL29HB03"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {app,auth,provider}

