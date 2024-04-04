const leer = require("prompt-sync" )();

nomIngUsuario=0;
eleccionUsuario=0;
saludar="def saludar";
despedir="def despedir";

console.log("Decime tu nombre:");
nomIngUsuario=Number(leer());
console.log("Saludar 1 o despedir 2:");
eleccionUsuario=leer();
if (eleccionUsuario == 1) {
    console.log("Saludar", nomIngUsuario);
   
}else if(eleccionUsuario == 2){
    console.log("Chau", nomIngUsuario);
    
}else{

}