// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1SROe9oidmFwkNpv2N7LCoAr9brQWrn8",
  authDomain: "react-firebase-8722c.firebaseapp.com",
  projectId: "react-firebase-8722c",
  storageBucket: "react-firebase-8722c.appspot.com",
  messagingSenderId: "739032377785",
  appId: "1:739032377785:web:18af893a4e85bb7a6c6e68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
