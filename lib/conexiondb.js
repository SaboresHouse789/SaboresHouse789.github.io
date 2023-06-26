import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

/** Conexión a la base de datos de Firebase.
 * @returns {firebase.firestore.Firestore}
 */
export function getFirestore() {
  return firebase.firestore();
}

/** Conexión al sistema de autenticación de Firebase.
 * @returns {firebase.auth.Auth}
 */
export function getAuth() {
  return firebase.auth();
}

/** Conexión al sistema de almacenamiento de Firebase.
 * @returns {firebase.storage.Storage}
 */
export function getStorage() {
  return firebase.storage();
}
