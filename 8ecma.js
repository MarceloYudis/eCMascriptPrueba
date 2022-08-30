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
//
//PROMESAS

const Saludo = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout( () => resolve('Buenas a todos'), 3000)
            : reject ( new Error('Salio mal... por la chucha D:'))
    })
};


///ASYNC Y AWAIT


const saludoAsincrono = async () => {
    const saludito = await Saludo();


    console.log(saludito);
};

saludoAsincrono();