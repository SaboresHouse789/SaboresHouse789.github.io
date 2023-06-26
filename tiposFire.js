// tiposFire.js

// Importar los módulos necesarios de Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Definición del tipo Firestore
export type Firestore = firebase.firestore.Firestore;

// Definición del tipo Auth
export type Auth = firebase.auth.Auth;

// Definición del tipo Storage
export type Storage = firebase.storage.Storage;
