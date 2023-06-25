export { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
export { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
export { auth } from './app/firebase.js';
export { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
export { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  // Paste your firebase config here
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
