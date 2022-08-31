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