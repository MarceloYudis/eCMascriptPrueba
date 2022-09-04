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
