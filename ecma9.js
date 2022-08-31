//Operador de reposo ECMA9

const cualquierObjeto = {
    name: 'pedro',
    job: 'electrician',
    age: '25'
}

let { name, ...all} = cualquierObjeto;

console.log( name, all );

///////////////////////////////