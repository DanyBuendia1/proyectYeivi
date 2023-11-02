let sesion = JSON.parse(sessionStorage.getItem("sesion_abierta"));

if (sesion != null){
    let nombre = document.getElementById("nombre");
    nombre.innerHTML=`Bienvenido al catalogo ${sesion.name} <button id="cerrar">Cerrar Sesion</button>`
    let cerrar = document.getElementById("cerrar");
    cerrar.addEventListener("click", ()=>{
    sessionStorage.clear();
    window.location="../presentacion.html"
})
}

let village = document.getElementById("village");
let villagerepeat = document.getElementById("villagerepeat");

let dbz = document.getElementById("dbz");
let dbzrepeat2 = document.getElementById("dbzrepeat2");
let dbzrepeat3 = document.getElementById("dbzrepeat3");

let RE2 = document.getElementById("RE2");
let RE2repit = document.getElementById("RE2repit");
let CD = document.getElementById("CD");
let RE3 = document.getElementById("RE3");
let Call = document.getElementById("Call");
let MK = document.getElementById("MK");
let MKrepeat = document.getElementById("MKrepeat");
let gears = document.getElementById("gears");
let gearsrepear = document.getElementById("gearsrepeat");
let forza = document.getElementById("forza");
let forzarepeat = document.getElementById("forzarepeat");

let information = document.getElementById("information");

village.addEventListener("click",()=>{
this.information.innerHTML=`
    <h3>Resident Evil Village</h3>
    <img src="../img/village.jpg" alt=""><br>
    <button id="descarga">Descargar</button>
        `;

        let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});
villagerepeat.addEventListener("click",()=>{
    this.information.innerHTML=`
        <h3>Resident Evil Village</h3>
        <img src="../img/village.jpg" alt=""><br>
        <button id="descarga">Descargar</button>
            `;
    
            let descarga = document.getElementById("descarga");
        descarga.addEventListener("click", ()=>{
        if(sesion !=null){
        alert("Descarga exitosa");
        }else{
        alert("necesitas iniciar sesion para descargar algun producto!!!")
        }
    })
    });
    

dbz.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Dragon Ball Z</h3>
    <img src="../img/dbz.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});
dbzrepeat2.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Dragon Ball Z</h3>
    <img src="../img/dbz.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});
dbzrepeat3.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Dragon Ball Z</h3>
    <img src="../img/dbz.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});

RE2.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Resident Evil 2</h3>
    <img src="../img/RE2.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});
RE2repit.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Resident Evil 2</h3>
    <img src="../img/RE2.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});

CD.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Call of Duty Vanguard</h3>
    <img src="../img/CD.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});

RE3.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Resident Evil 3</h3>
    <img src="../img/RE3.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});

Call.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Call Of Duty </h3>
    <img src="../img/Call.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});

MK.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Mortal Kombat</h3>
    <img src="../img/MK.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});

MKrepeat.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Mortal Kombat</h3>
    <img src="../img/MK.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});

gears.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Gears of War3</h3>
    <img src="../img/gears.jpeg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});
gearsrepear.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Gears of War3</h3>
    <img src="../img/gears.jpeg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});

forza.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Mortal Kombat</h3>
    <img src="../img/forza.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});
forzarepeat.addEventListener("click",()=>{
    this.information.innerHTML=`    
    <h3>Mortal Kombat</h3>
    <img src="../img/forza.jpg" alt=""><br>
    <button id="descarga">Descargar</button>`

 let descarga = document.getElementById("descarga");
    descarga.addEventListener("click", ()=>{
    if(sesion !=null){
    alert("Descarga exitosa");
    }else{
    alert("necesitas iniciar sesion para descargar algun producto!!!")
    }
})
});