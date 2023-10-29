let Users = JSON.parse(localStorage.getItem("registros"));
let registros =[];

if(Users == null){
    registros = [];
}else{
    registros=Users;
}

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

// ################ VALIDACION DE CAMPOS ###############
function validar(){
    let contraseña = document.getElementById("contraseña").value;
    let validador = document.getElementById("validador").value;
    
    let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(this.nombre == "" || this.correo == "" || this.contraseña == ""|| this.validador==""){
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
    datos = {
        name: this.nombre.value,
        email: this.correo.value,
        password: this.contraseña.value
    }

    registros.push(datos);
    localStorage.setItem("Users" , JSON.stringify(registros));
}
// #####################################################