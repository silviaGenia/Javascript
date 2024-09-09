/**
 * Crear algoritmo que imprima números impares
 */

let numero = 1;

while (numero <= 10) {
  if (numero % 2 === 1) {
    console.log("Impar", numero);
  }
  numero++;
}

let i = 0;
while (i <= 10) {
  if (i % 2 !== 0) {
    console.log("Impar", i);
  }
  i++;
}
