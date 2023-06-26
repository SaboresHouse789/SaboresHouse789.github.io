// Your web app's Firebase configuration
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
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const analytics = firebase.analytics();
  
  function registrarse() {
    // Obtener el email y la contraseña ingresados por el usuario
    const email = prompt('Ingrese su email:');
    const password = prompt('Ingrese su contraseña:');
  
    // Crear un nuevo usuario utilizando Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registro exitoso, puedes realizar acciones adicionales si lo deseas
        console.log('Registro exitoso');
      })
      .catch((error) => {
        // Ocurrió un error durante el registro
        console.log('Error en el registro:', error.message);
      });
  }
  
  function iniciarSesion() {
    // Obtener el email y la contraseña ingresados por el usuario
    const email = prompt('Ingrese su email:');
    const password = prompt('Ingrese su contraseña:');
  
    // Iniciar sesión utilizando Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso, puedes realizar acciones adicionales si lo deseas
        console.log('Inicio de sesión exitoso');
      })
      .catch((error) => {
        // Ocurrió un error durante el inicio de sesión
        console.log('Error en el inicio de sesión:', error.message);
      });
  }
  
  function cerrarSesion() {
    // Cerrar sesión utilizando Firebase Authentication
    firebase.auth().signOut()
      .then(() => {
        // Cierre de sesión exitoso, puedes realizar acciones adicionales si lo deseas
        console.log('Cierre de sesión exitoso');
      })
      .catch((error) => {
        // Ocurrió un error durante el cierre de sesión
        console.log('Error en el cierre de sesión:', error.message);
      });
  }
  