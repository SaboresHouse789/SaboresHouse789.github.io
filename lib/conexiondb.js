// archivo conexiondb.js
/** Conexión a la base de datos de Firebase.
 *  @returns {import("./tiposFire").Firestore} */
 export function getFirestore() {
  // @ts-ignore
  return firebase.firestore();
}

/** Conexión al sistema de autenticación de Firebase.
 *  @returns {import("./tiposFire").Auth} */
export function getAuth() {
  // @ts-ignore
  return firebase.auth();
}

/** Conexión al sistema de almacenamiento de Firebase.
 *  @returns {import("./tiposFire").Storage} */
export function getStorage() {
  // @ts-ignore
  return firebase.storage();
}


/** Conexión al sistema de almacenamiento de Firebase.
 * @returns {firebase.storage.Storage}
 */
export function getStorage() {
  return firebase.storage();
}
