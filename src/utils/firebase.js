// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbw-auBqsqq-P1ukCTrn5Pkz0dj0c6iq0",
  authDomain: "movix-adfcd.firebaseapp.com",
  projectId: "movix-adfcd",
  storageBucket: "movix-adfcd.appspot.com",
  messagingSenderId: "1044060398384",
  appId: "1:1044060398384:web:7849dd0de04fb3c9051ef5",
  measurementId: "G-TVRWT1PFS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
