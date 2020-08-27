var signo = prompt('Cual es tu signo');
console.log(signo);

switch (signo) {
  case 'acuario':
    console.log('Tu signo acuario');
    break;
  case 'piscis':
    console.log('Tu signo espiscis');
    break;
  case 'cancer':
    console.log('Tu signo es cancer');
    break;
  case 'sagitario':
    console.log('Tu signo es sagitario');
    break;
  default:
    console.log('Selección incorrecta');
    break;
}
