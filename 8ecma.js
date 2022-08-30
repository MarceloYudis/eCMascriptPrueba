//Transformar objetos en matrices
//Ecma8
const datillos = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const matrizDeDAtillos = Object.entries(datillos);
console.log(matrizDeDAtillos);

matrizDeDAtillos.length;

///////////////////////////////////////
//Transformar objetos en un Array

const arrayDeDAtillos = Object.values(datillos);
console.log(arrayDeDAtillos);

///////////////////////////////////////
//Padding

const testo = 'aloo ';
console.log(testo.padStart(9, 'haa'))

console.log(testo.padEnd(13, 'bendiciones'));

///////////////////////////////////////