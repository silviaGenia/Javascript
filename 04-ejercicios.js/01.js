//Construir una funcion que reciba dos parametros
//Cual de los dos es el numero mayor

function cualEsMayor(a, b) {
  /*  if (a > b) {
    return a;
  } else {
    return b;
  } */

  //operador ternario
  return a > b ? a : b;
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);
