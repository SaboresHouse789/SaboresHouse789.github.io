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
   
