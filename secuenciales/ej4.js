const leer = require("prompt-sync" )();
let nombreIngresado = "nombre ingresado";
let colorFav = "color fav";
console.log ("ingresa tu nombre");
nombreIngresado = leer();
console.log ("ingresa tu color fav");
colorFav = leer();
console.log ("Hola",nombreIngresado, "tu color fav es:", colorFav )