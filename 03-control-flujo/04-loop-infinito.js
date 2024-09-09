let i = 0;
while (i < 10) {
  if (i % 2 === 1) {
    console.log(i);
  }
  //si no se pone es un loop infinito
  i++;
}
console.log("Fuera del while");
