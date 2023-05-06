//Alertas
alert("hola soy miguel");

//Variables
let nombre = "Miguel"


//Constantes

const altura = 188;

//Mostrar por consola
console.log(nombre);
console.log(altura);

//Concatenacion
let Concatenacion = nombre + "" + altura;

//Seleccionar elementos del DOM (Document Object Model) 

let datos = document.querySelector("#titulo_pagina");
datos.innerHTML += `
<h1>Soy la caja de datos </h1>
<h2>Mi nombre es: ${nombre} y altura ${altura}</h2>
`   
//Condiciones
if(altura > 185){
    datos.innerHTML+= " <h1> Eres una persona alta</h1>"
} else {
    datos.innerHTML += "<h1> Eres un enano</h1>"
}

//Bucles

for(let year = 2000; year <= 2023; year++){
    datos.innerHTML += `
    <h2> Estamos en el año ${year} </h2>
    `
}

//Arrays

const nombres = ["Victoe", "Miguel", "Xime"];

//mostrar de forma dinamica
nombres.forEach(nombre =>{
    datos.innerHTML += "<li>" + nombre + "</li>";
})

//Funciones

const miInformacion = (nombre, altura) => {
    let datos = `
        <h1>Soy la caja de datos </h1>
        <h2>Mi nombre es: ${nombre} y altura ${altura}</h2>
        `;
    return datos;
}

console.log(miInformacion("Sebas", 167));
