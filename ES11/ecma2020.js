const butonsito = document.getElementById("etiquetaBoton")

butonsito.addEventListener("click", async function() {
    const datoExterno = await import("./arvhivo.js");
    arvhivo.saludo();
})