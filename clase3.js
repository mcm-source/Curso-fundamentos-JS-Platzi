var edad = 27;

//edad++;
edad += 1;
console.log(edad);

var peso = 75;

//peso = peso - 2;
peso -= 2;

console.log(peso);

var sandwich = 1;

peso = peso + sandwich;

console.log(peso);

var jugarFutbol = 3;
peso -= jugarFutbol;
console.log(peso);

var precioDeVino = 200.3;
var total = Math.round(precioDeVino * 100 * 3) / 100;
console.log(total);
var totalStr = total.toFixed(3);
console.log(totalStr);
var total2 = parseFloat(totalStr);
console.log(total2);

var pizza = 8;
var persona = 2;
var cantidadPorcionesPorPersona = pizza / persona;
console.log(cantidadPorcionesPorPersona);
