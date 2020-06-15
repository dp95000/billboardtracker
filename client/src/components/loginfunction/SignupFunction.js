import $ from 'jquery';

export default function SignupFunction(event) {
  // Getting references to our form and inputs
  var nameInput = document.querySelector("input#name-input");
  var emailInput = document.querySelector("input#email-input");
  var passwordInput = document.querySelector("input#password-input");

  // When the form is submitted, we validate there's a name, email and password entered

  var userData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  if (!userData.name || !userData.email || !userData.password) {
    alert("All fields are required. Please try again");
    return;
  }

  // If we have a name, email and password we run the signupUser function and clear the form
  signupUser(userData.name, userData.email, userData.password);
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  window.location.replace("/login");
};

function signupUser(name, email, password) {
  $.post("/api/signup", {
    email: email,
    password: password,
    name: name
  })
};