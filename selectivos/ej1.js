const leer = require("prompt-sync" )();


let numEvaluar = 0;

console.log ("ingresa un numero a evaluar");
numEvaluar = Number(leer());
if (numEvaluar > 0) {
 console.log("es positivo");   
}
else if(numEvaluar ==0){
console.log ("ingresaste 0");
}else{
    console.log("es negativo");
}