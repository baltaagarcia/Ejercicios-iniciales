const leer = require("prompt-sync" )()

numIngUsuario=0;
numIngUsuario2=0;
eleccionUsuario=0;
suma=0;
resta=0;

console.log("Ingresa un numero:");
numIngUsuario= Number(leer());
console.log("Decime otro numero");
numIngUsuario2 = Number(leer());
console.log("Si queres sumar escribi 1 o si queres restar escribi 2:");
eleccionUsuario=leer();
if (eleccionUsuario == 1) {
    console.log("Elegiste sumar");
    suma=numIngUsuario + numIngUsuario2;
    console.log("El resultado es", suma);
}else if(eleccionUsuario == 2){
    console.log("Elegiste restar");
    resta = numIngUsuario-numIngUsuario2;
    console.log("El resultado es", resta);
    
}else{

}


    