var paulo = {
  nombre: 'Paulo',
  apellido: 'Alferez',
  altura: 1.86,
};
var pepe = {
  nombre: 'Pepe',
  apellido: 'Do Monte',
  altura: 1.66,
};
var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
};

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
};

var personas = [paula, vicky, pepe, paulo];

console.log(personas);

console.log(personas[0]);

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura}mts`);
}
