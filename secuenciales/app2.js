const leer = require("prompt-sync" )();

let nombreIngresado = "nombre no ingresado"; //estoy declarando e inicializando la variable

console.log("Decime tu nombre:");

nombreIngresado = leer();

console.log ("Hola", nombreIngresado);