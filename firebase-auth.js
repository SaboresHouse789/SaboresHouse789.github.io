/**
 * @license
 * Firebase v9.23.0 - Autenticación de usuarios del SDK de JavaScript para Firebase
 * La nueva generación de Firebase JS SDK se denomina "Firebase v9" y admite módulos y Tree-Shaking.
 * Aprende más en: https://firebase.google.com/docs/web/modular-upgrade
 *
 * © 2021 Google LLC.
 */

// Importa las bibliotecas necesarias de Firebase
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import firebase from './firebase-app';

// Obtén la instancia de autenticación de Firebase
const auth = getAuth(firebase);

// Función para registrar un nuevo usuario
function registrarUsuario(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Función para iniciar sesión con un usuario existente
function iniciarSesion(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Función para cerrar sesión
function cerrarSesion() {
  return signOut(auth);
}

// Exporta las funciones de autenticación
export { registrarUsuario, iniciarSesion, cerrarSesion };
