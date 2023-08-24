const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   event.preventDefault();
   const username = loginInput.value;
   loginForm.classList.add(HIDDEN_CALSSNAME);
   localStorage.setItem("USERNAME_KEY", username);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CALSSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    // show the form
}
