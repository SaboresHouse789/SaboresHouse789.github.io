// Importa las bibliotecas necesarias de Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

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
firebase.initializeApp(firebaseConfig);

// Exporta la instancia de Firebase para usarla en otros archivos
export default firebase;