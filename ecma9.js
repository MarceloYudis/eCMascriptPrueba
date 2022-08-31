//Operador de reposo ECMA9

const cualquierObjeto = {
    name: 'pedro',
    job: 'electrician',
    age: '25'
}

let { name, ...all} = cualquierObjeto;

console.log( name, all );

///////////////////////////////
//unir elementos de objetos a un nuevo objeto usando operadores de propagacion

const ndoCualquierObjeto = {
    ...cualquierObjeto,
    country: 'CO',
}

console.log(ndoCualquierObjeto); 

const saludos = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('Hola a toedos')
        : reject(new Error('Test Error'))
    })
}

saludos()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));

 

    //como agrupar grupos de regex
    const regexData = /([0-9]{4}) - ([0-9] {2})-([0-9]{2})/

    const match = regexData.exec('2022-08-31');
    const year = match[1];
    const month = match[2];
    const day = match[3]

    console.log(year, month , day);
