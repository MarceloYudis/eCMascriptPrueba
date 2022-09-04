const butonsito = document.getElementById("etiquetaBoton")

butonsito.addEventListener("click", async function() {
    const datoExterno = await import("./arvhivo.js");
    arvhivo.saludo();
})

/////////////////////////////
//Representar valores mayores de 2 a la 53
const numeroGigante = 9007199254740991n;

const otroNumGigante = BigInt(9007199254740991);

console.log(numeroGigante);

///////////////////////////
//Una promesa que es recibida recien cuando todas las promesas sean aceptadas y/o rechadazadas

const primeraPromesa = new Promise ((resolve,reject) => reject('reject')) ;
const segundaPromesa = new Promise ((resolve,reject) => resolve('resolve')) ;
const terceraPromesa = new Promise ((resolve,reject) => reject('reject 3')) ;

