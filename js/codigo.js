/* 

guardar_localstorage ();

function guardar_localstorage(){

      persona = {
      nombre: "Marcos",
      edad: 40 ,
      correo:"markkusito@gmail.comm",
      peso: 102,
      altura: 1.82 
    }
    
};

let nombre = "Juan";

localStorage.setItem("nombre", persona); 

console.log(nombre)

/* console.log(persona) */


let datosMios = {
    id: 1,
    nombre: "Marcos",
    edad: 40,
    domicilio:"Hernandez 494",
    ciudad: "Libertador San Martin",
    Provincia:"E. Rios",
    telefono: 3434568420,
    email: "markkusito@gmail.com"
}

    //guardo los datos de mi objeto en la clave "perfil"
localStorage.setItem("perfil", JSON.stringify(datosMios)); 
    //obtengo los datos de la clave "perfil" y los guardo en la variable "perfil"
let perfil= JSON.parse(localStorage.getItem("perfil"));
    //selecciono los botones mediante id:# y les pongo un nombre cualquiera, luego los guardo en una constante
 const mensaje = document.querySelector('#mensaje'),
 input = document.querySelector('#muestreo');

    //creo una funcion para llamarla luego y poder ver los datos del objeto en el DOM



    
 
function mostrarPerfil() {

    let perfil = JSON.parse(localStorage.getItem("perfil"));
    
    mensaje.innerText = perfil.ciudad;

}


muestreo.addEventListener("click", mostrarPerfil);

