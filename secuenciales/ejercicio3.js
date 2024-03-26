const leer = require("prompt-sync" )();

// reciba un numero y muestre el doble por consola

let numeroIngresado =0;
let numeroDuplicado=0;

console.log("Decime un numero:");
numeroIngresado = leer();
numeroDuplicado = numeroIngresado*2;

console.log("Resultado", numeroDuplicado);