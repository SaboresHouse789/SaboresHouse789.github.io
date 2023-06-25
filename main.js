// Import the functions you need from the SDKs you need
import { initializeApp } from "./app/firebase.js";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnhtgMB_BZ6siMX2ti_54Jt3t9AdOBKIs",
  authDomain: "sabores-house.firebaseapp.com",
  databaseURL: "https://sabores-house-default-rtdb.firebaseio.com",
  projectId: "sabores-house",
  storageBucket: "sabores-house.appspot.com",
  messagingSenderId: "42245565592",
  appId: "1:42245565592:web:9bf287743dc96c8c3734ed",
  measurementId: "G-87B5870XV6"
};
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Código existente...

// Después de que se haya completado el registro exitosamente
// Puedes agregar esto dentro de la función donde se realiza el registro
// o en el lugar adecuado según tu implementación.
import './app/signupForm.js';
import './app/signinForm.js';
import './app/googleLogin.js';
import './app/facebookLogin.js';
import './app/githubLogin.js';
import './app/logout.js';
import './app/postList.js';
// Aquí se muestra un ejemplo básico usando Firebase Auth
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Registro exitoso
    // Realizar acciones adicionales si es necesario

    // Recargar la página después de 1 segundo
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  })
  .catch((error) => {
    // Manejar errores de registro
    console.log(error);
  });

// Código existente...

let appElement = document.getElementById('typewriter');

let typewriter = new Typewriter(appElement, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();

// Escuchar cambios en el estado de autenticación
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    try {
      // Obtener los documentos de la colección "posts"
      const querySnapshot = await getDocs(collection(db, "posts"));
      setupPosts(querySnapshot.docs);
    } catch (error) {
      console.log(error);
    }
  } else {
    setupPosts([]);
    loginCheck(user);
  }
});
