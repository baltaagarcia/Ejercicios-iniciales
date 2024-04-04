const leer = require("prompt-sync" )();
const RANGO_MAXIMO = 10 
const PALABRA_SECRETA="HOLA"

let palabraIngresada = "def palabra ingresada";
while ( i =3) {
    console.log("intenta adivinar la palabra secreta del programa");
    palabraIngresada = leer();
    if(PALABRA_SECRETA == palabraIngresada) {
        console.log ("ganaste 10 pesos")
    }
    else{
        console.log("perdiste");
    
    }i+1}

