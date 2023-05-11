//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("forgot").addEventListener("click", forgotPassword);
document.getElementById("btn-iniciar-sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_password = document.querySelector(".formulario__password");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES

function anchoPage() {
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
        formulario_password.style.display = "none";
        
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";  
        formulario_password.style.display = "none"; 
    }
}

anchoPage();
function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        formulario_password.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        formulario_password.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        formulario_password.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        formulario_password.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

function forgotPassword() {
    if (window.innerWidth > 850) {
        formulario_password.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "none";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_password.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "none"
    }
}

var attempt=3;
function validate(){
var usuar=document.getElementById("usuar").value;
var password=document.getElementById("password").value;
if (usuar=="Admin" && password=="1234@") {
    alert("Ingreso Exitoso");
    window.location="/resources/views/home/home.html";
    return false;
} if (usuar=="Cliente" && password=="123acceso") {
    alert("Ingreso Exitoso");
    window.location="resources/views/home/home.html";
    return false;
} 
else{
    attempt--;
}

alert("Te queda " +attempt+ "intentos mas")
    if(attempt==0){
        document.getElementById("usuar").disable=true;
        document.getElementById("password").disable=true;
        document.getElementById("submit").disable=true;    
    }
}