
const form = document.querySelector("#form");
const submit = document.querySelector("#submit-btn");
const formWrapper = document.querySelector("#form-wrapper");
const msg = document.querySelector("#alert-msg");
const formContainer = document.querySelector(".form-container");

submit.addEventListener('click',submitForm);
function submitForm(event){
    event.preventDefault();
 
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let confirmpassword = document.getElementById("confirmpassword").value;

         // Generate a random 16-byte access token (for simplicity, not secure)
    const accessToken = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
).join('');

if(username&& email && password && confirmpassword)
{  
    
   // Store user details in local storage
   localStorage.setItem('accessToken', accessToken);
   localStorage.setItem('username', username);
   localStorage.setItem('email', email);
   localStorage.setItem('password', password);

  if(password===confirmpassword)
  {
    renderLoginPage();
  }
  else
  {
    displayMsg("Password doen't match");
    return;
  }
 
}
else
{
 
    displayMsg("Error: All fields are necesary");
    return;

}


}

function renderLoginPage(){
    formWrapper.style.cssText = "display:none;"
    let username = localStorage.getItem('username');
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    let accessToken = localStorage.getItem('accessToken')

    let login = document.createElement("div");
    login.className = "login-page";
    login.innerHTML = `
    <h3 id="success-msg">Signup Successfully</h3>
    <h2>Profile</h2>
    <i class='bx bx-user' id ="user-icon"></i>
    <p>Full Name : ${username}</p>
    <p>Email : ${email}</p>
    <p id="token">Token : ${accessToken}</p>
    <p>Password : ${password}</p>
    <button id="logout-btn">LOGOUT</button>
    `;
    formContainer.appendChild(login);
    let logoutBtn  = document.getElementById("logout-btn");    
    logoutBtn.addEventListener('click', ()=>{
    // it will go on sign up page 
    localStorage.clear();

    // display the sign up page

    login.style.cssText = "display:none;"
    formWrapper.style.cssText = "display:block;"
    form.reset();
  
   
});
   
    
}
function displayMsg(msgText)
{
  msg.innerHTML = msgText;
  setTimeout(function(){
   msg.innerHTML = ""

  }, 2000);
}