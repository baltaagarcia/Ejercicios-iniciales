const leer = require("prompt-sync" )();

let numeroIngresado =0;
let numeroIngresado2=0;
let suma=0;
console.log("Decime un numero:");
numeroIngresado=Number(leer());
console.log("Decime otro numero:");
numeroIngresado2=Number(leer());
suma = numeroIngresado + numeroIngresado2
console.log("El resultado de la suma es:", suma)
