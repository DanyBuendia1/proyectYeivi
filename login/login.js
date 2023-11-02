let contador=0;
let alerta = document.getElementById("alerta");
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
            let datos ={
                name : User[i].name
            }
            sessionStorage.setItem("sesion_abierta", JSON.stringify(datos));
            window.location="../catalogo/catalogo.html";
        }
    }
    contador++;
    this.alerta.innerHTML =`¡¡¡Las credenciales no son correctas!!! Numero de intentos ${contador} de 3`
    if(contador ===3){
        this.correo.disabled = true;
        this.contraseña.disabled = true;

        setTimeout(() => {
            this.correo.disabled = false;
            this.contraseña.disabled = false;
            contador=0;
            alert("el login se desbloque correctamente")
        }, 8000);
    }
}

