const leer = require("prompt-sync" )();
const RANGO_MAXIMO = 10 
const PALABRA_SECRETA="HOLA"

let palabraIngresada = "def palabra ingresada";
for (let i = 0; i < RANGO_MAXIMO; i++) {; 
    console.log("intenta adivinar la palabra secreta del programa");
    palabraIngresada = leer();
    if(PALABRA_SECRETA == palabraIngresada) {
        console.log ("ganaste 10 pesos")
        i=10
    }else{
        console.log("perdiste");
    }}
