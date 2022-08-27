//ECMA SCRIPT 6
//parametros por defecto
function pruebaDeParametros(name = 'oscar', edad = 32, pais = "CO") {
    console.log(name, edad, pais);
}

pruebaDeParametros();

// metodo antecesor
function metodoAntecesor(nombre, edad, pais) {
    var nombre = nombre || 'pedro';
    var edad = edad || '22';
    var pais = pais || 'ARG';

    console.log(nombre, edad, pais);
}

//////////////////////////////////////
//Concatenacion ECMA6
let saludo = "Buenas tardes";
let pregunta = "¿Que hora tienes?";
let fraseCompleta = `${hello} ${pregunta}`;
console.log(fraseCompleta);

//concatenacion anterior
let oli = "OLANDA";
let todos = "a todos";
let fraseJunta = oli + ' ' + todos;
console.log(fraseJunta);

////////////////////////////////////////
// Multilinea ecma6
let frase = `Frase inicial del parrafo
segunda linea del mismo parrafo
`;

//metodo anterior
let otraFrase = "Saludos a todos \n" + "Que pasen un buen dia";

//////////////////////////////////////////
// Desestructuracion ecma6
let usser = {
    'gender':'masculine',
    'job': 'electrician',
    'age': '26'
}

let { job } = usser;
console.log(job);

// metodo anterior
console.log( usser.job, usser.age);

///////////////////////////////////////////
//Operador de propagacion. Spread Operator ecma6
let fruticas = ['pera','tomate','sandia','frutilla','granada'];
let verduricas = ['repollo','cebolla','lechuga','rabano'];

let mercadito = ['huevo', ...fruticas, ...verduricas];

//metodo anterior
let mercadoo = ['huevo', 'pera','tomate','sandia','frutilla','granada','repollo','cebolla','lechuga','rabano'];

////////////////////////////////////////////
// Declaracion LET y CONST
{
    let miVArialbleLET = 'variableLET';

    console.log(miVArialbleLET); // "variableLET"
}
{
    var miVariableVAR = 'variableVAR';
}

console.log(miVArialbleLET); //error not defined
console.log(miVariableVAR); // "variable VAR"

const datoPrueba = "miguel";

datoPrueba = "patricio"; //error cant assign to a constan variable

