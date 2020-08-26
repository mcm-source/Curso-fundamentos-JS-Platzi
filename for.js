var sacha = {
  nombre: 'Sacha',
  apellidos: 'Lifszyc',
  edad: 28,
  peso: 75,
};

console.log(
  `Al inicio del año ${sacha.nombre} pesa ${sacha.peso.toFixed(2)} kg`
);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANNO = 365;
const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);

for (var i = 1; i <= DIAS_DEL_ANNO; i++) {
  var random = Math.random();
  if (random < 0.25) {
    //aumenta de peso
    aumentarDePeso(sacha);
  } else if (random < 0.5) {
    // disminuye de peso
    adelgazar(sacha);
  }
}

console.log(
  `Al final  del año ${sacha.nombre} pesa ${sacha.peso.toFixed(2)} kg`
);
