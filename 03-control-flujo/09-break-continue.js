//break nos permite salir del loop
//continue nos permite saltar una iteracion
let i = 0;

while (i < 6) {
  i++;
  if (i === 2) {
    continue;
  }
  //Detener
  if (i === 4) {
    break;
  }
  console.log(i);
}
