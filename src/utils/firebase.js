// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNmInyxIcJOHfDS1gN8oAINyy0CdFI9vs",
  authDomain: "movix-eebe8.firebaseapp.com",
  projectId: "movix-eebe8",
  storageBucket: "movix-eebe8.appspot.com",
  messagingSenderId: "433529608748",
  appId: "1:433529608748:web:d511b2c5ed96257bfd0f89",
  measurementId: "G-QZNWHQ5HQM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
