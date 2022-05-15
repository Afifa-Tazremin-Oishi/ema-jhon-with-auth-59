// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu16iQTxpnx9Kxz5qkeW5_weekRIdQ15c",
  authDomain: "ema-john-simple-def53.firebaseapp.com",
  projectId: "ema-john-simple-def53",
  storageBucket: "ema-john-simple-def53.appspot.com",
  messagingSenderId: "687531623053",
  appId: "1:687531623053:web:69f47431b7ddbf7a1598c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

