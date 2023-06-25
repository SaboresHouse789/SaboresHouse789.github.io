import { createUserWhitEmailAndPasswword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import{ auth } from './'firebase.js'
const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  console.log(email, password)

  try { 
   const userCredentials = await createUserWhitEmailAndPassword(auth, email, password)
console.log(userCredentials) 
  } catch(error) {
    console.log(error)
   
  




  
    // Close the signup modal
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();

    // reset the form
    signUpForm.reset();

    // show welcome message
    showMessage("Welcome" + userCredentials.user.email);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("Email already in use", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Invalid email", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Weak password", "error")
    } else if (error.code) {
      showMessage("Something went wrong", "error")
    }
  }

});
