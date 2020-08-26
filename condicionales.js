var sacha = {
  nombre: 'Sacha',
  apellidos: 'Lifszyc',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true,
};

var Juan = {
  nombre: 'Juan',
  apellidos: 'Gomez',
  edad: 13,
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if (persona.ingeniero) {
    console.log('ingeniero');
  } else {
    console.log('No es ingeniero');
  }
  if (persona.cocinero) {
    console.log('cocinero');
  }
  if (persona.cantante) {
    console.log('cantante');
  }
  if (persona.dj) {
    console.log('dj');
  }
  if (persona.guitarrista) {
    console.log('guitarrista');
  }
  if (persona.drone) {
    console.log('drone');
  }
}

imprimirProfesiones(sacha);

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(Juan);
