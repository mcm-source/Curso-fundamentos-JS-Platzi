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

function imprimirNombreEnMayusculas(persona) {
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas({ nombre: 'Sacha' });
// imprimirNombreEnMayusculas({apellido:"Lifszyc"});
console.log();

function imprimirNombreYEdad({ nombre, edad }) {
  console.log(`Hola soy ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(sacha);

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  };
}
console.log(sacha);
var sacha2 = cumpleanos(sacha);
console.log(sacha);
console.log(sacha2);
