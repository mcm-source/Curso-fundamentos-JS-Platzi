var sacha = {
  nombre: 'Sacha',
  apellidos: 'Lifszyc',
  edad: 28,
};

var dario = {
  nombre: 'Darío',
  apellido: 'Perez',
  edad: 27,
};

var pepe = {
  apellido: 'Perez',
  edad: 27,
};

function imprimirNombreEnMayusculas({ nombre }) {
  var nombre = nombre.toUpperCase();
  console.log(nombre);
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas({ nombre: 'Sacha' });
// imprimirNombreEnMayusculas({apellido:"Lifszyc"});
console.log();
