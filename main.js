// Código existente...
// Después de que se haya completado el registro exitosamente
// Puedes agregar esto dentro de la función donde se realiza el registro
// o en el lugar adecuado según tu implementación.

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
