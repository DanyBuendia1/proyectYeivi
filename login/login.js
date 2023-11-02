let correo = document.getElementById("correo").value;
let contraseña = document.getElementById("contraseña").value;

let registrar = document.getElementById("registrarse");
registrar.addEventListener("click",()=>{
    window.location="../formulario/formulario.html"
})

//------------------------------------------------------------------------------
let entrar = document.getElementById("entrar");
entrar.addEventListener("click", ()=>{
    validacion();
})

function validacion(){

    let Correovalid = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(Correovalid.test(this.correo.value) ===false){
        alert('El formato de correo es incorrecto');
    }

    let User = JSON.parse(localStorage.getItem("Users"));
    
    for(let i =0; i<User.length; i++){
        if (User[i].email == this.correo.value && User[i].password == this.contraseña.value){
            window.location="../catalogo/catalogo.html"
        }
    }

}