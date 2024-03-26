const leer = require("prompt-sync" )()

numIngUsuario=0;
numIngUsuario2=0;
eleccionUsuario=0;
multiplicacion=0;
division=0;

console.log("Ingresa un numero:");
numIngUsuario= Number(leer());
console.log("Decime otro numero");
numIngUsuario2 = Number(leer());
console.log("Si queres multiplicar escribi 1 o si queres dividir escribi 2:");
eleccionUsuario=leer();
if (eleccionUsuario == 1) {
    console.log("Elegiste multiplicar");
    multiplicacion=numIngUsuario * numIngUsuario2;
    console.log("El resultado es", multiplicacion);
}else if(eleccionUsuario == 2){
    console.log("Elegiste dividir");
    division= numIngUsuario/numIngUsuario2;
    console.log("El resultado es", division);
    
}else{

}