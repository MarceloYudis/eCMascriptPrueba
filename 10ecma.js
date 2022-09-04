let arraysito = [1,2 ,3 , [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(1));
//valor de la profundida sobre la cual trabajar el metdo falt



//metodo flat map
let numeritos = [2, 33, 4, 54, 11, 99];
console.log( numeritos.flatMap( value => [ value, value *2]));


//eliinar espacios al inicio de un texto
let hello = '                       hello world';
console.log(hello.trimStart());
//eliminar espacios al final de un text

let bye = ' Goodbye dude             '
console.log(bye.trimEnd());

///////////////////////////////////
//optional cost biming
//version anterior
try {

} catch ( error) {
    error
}
//en ES10

try {
    
} catch {
    error
}
////////////////////////////////
//uso de form entries

let datitos = [['animal', 'vaca'],['nro de ptas',4]];

console.log(Object.fromEntries(datitos));

///////////////////////////////////////
//Acceder a una descripcion del objeto symbol
let elSimbolo = 'suSimbolo';
let simvolo = Symbol(elSimbolo);
console.log(symbol.description)
