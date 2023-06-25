// Import the functions you need from the SDKs you need
import { initializeApp } from "./app/firebase.js";
import { getAnalytics } from "./firebase/analytics";
import { auth } from './app/firebase.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyDnhtgMB_BZ6siMX2ti_54Jt3t9AdOBKIs",
  authDomain: "sabores-house.firebaseapp.com",
  databaseURL: "https://sabores-house-default-rtdb.firebaseio.com",
  projectId: "sabores-house",
  storageBucket: "sabores-house.appspot.com",
  messagingSenderId: "42245565592",
  appId: "1:42245565592:web:9bf287743dc96c8c3734ed",
  measurementId: "G-87B5870XV6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
