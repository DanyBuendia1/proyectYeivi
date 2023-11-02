let registros =[];
let Users = JSON.parse(localStorage.getItem("registros"));
console.log(JSON.parse(localStorage.getItem("registros")));
if(Users == null){
   Users = registros;
}else{
    registros = Users;
}
console.log(Users);
let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let contraseña = document.getElementById("contraseña").value;
let validador = document.getElementById("validador").value;

// ☝️☝️☝️☝️☝️☝️☝️ VARIABLES ☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️

// ################ Redirigir al menu ###############
let menu = document.getElementById("menu");
menu.addEventListener("click", ()=>{
    window.location=("../presentacion.html");
});
// #####################################################

// ############## REGISTRAR ############################
let login = document.getElementById("login");
login.addEventListener("click", ()=>{
    validar();
})
// #####################################################



// ################ VALIDACION DE CAMPOS ###############
function validar(){
    let contraseña = document.getElementById("contraseña").value;
    let validador = document.getElementById("validador").value;
    
    let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(this.nombre.value == "" || this.correo.value == "" || this.contraseña.value == ""|| this.validador.value==""){
        alert("Se requiere llenar todos los campos");
    }else if(validarEmail.test(this.correo.value) === false){
        alert("El correo que ingresaste no es valido!!!");
    }else if(contraseña != validador){
        alert("Las contraseñas no coinciden, intente nuevamente")
    }else{

        almacenar();
    }
}
// ################ FIN DE LA VALIDACION ################

// ################ ALMACENAR REGISTROS #################
function almacenar(){
  let datos = {
        name: this.nombre.value,
        email: this.correo.value,
        password: this.contraseña.value
    }

    registros.push(datos);
    localStorage.setItem("Users" , JSON.stringify(registros));
    alert('tus datos fueron guardados exitosamente!!');
    let confirmar = confirm('¡Quieres iniciar sesion?');

    if(confirmar == true){
        window.location="../login/login.html";
    }else{
        location.reload();
    }

}
// #####################################################
// ################ REVELAR CONTRASEÑA ##################
const revelar = document.getElementById("revelar");
revelar.addEventListener("change", ()=>{
    if(revelar.checked ==true){
        this.contraseña.type = "text";
        this.validador.type = "text";
    }else{
        this.contraseña.type = "password";
        this.validador.type = "password";
    
    }
})
// ######################################################