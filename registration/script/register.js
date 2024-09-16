// Get form element by ID //
const registerForm  = document.getElementById('register');
 
//Get Form Element by ID
function registerUser (e){
e.preventDefault()
    const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
console.log(username, email, password);
}
//Handle Form Submit
registerForm.onsubmit = registerUser;