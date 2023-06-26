/**
 * @license
 * Firebase v9.23.0 - Inicio del SDK de JavaScript para Firebase
 * La nueva generación de Firebase JS SDK se denomina "Firebase v9" y admite módulos y Tree-Shaking.
 * Aprende más en: https://firebase.google.com/docs/web/modular-upgrade
 *
 * © 2021 Google LLC.
 */

// Importa las bibliotecas necesarias de Firebase
import { initializeApp } from 'firebase/app';

// Tu configuración de Firebase
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

// Inicializa Firebase con la configuración
const app = initializeApp(firebaseConfig);

export default app;