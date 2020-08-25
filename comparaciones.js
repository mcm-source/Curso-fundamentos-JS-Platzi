var x = 4;
var y = '4';

var sacha = {
  nombre: 'Sacha',
};

var otraPersona = sacha;

otraPersona.nombre = 'Pepe';

console.log(x == y); // tienen el mismo valor
console.log(x === y); // son del mismo tipo;
console.log(sacha == otraPersona);
console.log(sacha.nombre);
