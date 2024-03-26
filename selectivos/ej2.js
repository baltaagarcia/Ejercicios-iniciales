const leer = require("prompt-sync" )();
const PALABRA_SECRETA = "h"

let palabraIngresada = "def palabra ingresada";

console.log("intenta adivinar la palabra secreta del programa");
palabraIngresada = leer();
if(PALABRA_SECRETA == palabraIngresada) {
    console.log ("ganaste 10 pesos")
}else{
    console.log("perdiste");
}