// Archivo: firebase-auth.js

// Importar el módulo de autenticación de Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

// Configurar la inicialización de Firebase
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

// Inicializar la app de Firebase
firebase.initializeApp(firebaseConfig);

// Función para registrar un nuevo usuario
const signUp = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Usuario registrado exitosamente
      const user = userCredential.user;
      console.log('Registro exitoso:', user);
    })
    .catch((error) => {
      // Error durante el registro
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error durante el registro:', errorCode, errorMessage);
    });
};

// Función para iniciar sesión con email y contraseña
const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Usuario inició sesión exitosamente
      const user = userCredential.user;
      console.log('Inicio de sesión exitoso:', user);
    })
    .catch((error) => {
      // Error durante el inicio de sesión
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error durante el inicio de sesión:', errorCode, errorMessage);
    });
};

// Exportar las funciones de registro e inicio de sesión
export { signUp, signIn };