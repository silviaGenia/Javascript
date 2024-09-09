//Suma de numeros pares
let numero = 1;
let suma = 0;

while (numero <= 10) {
  {
    if (numero % 2 === 0) {
      console.log(numero);
      suma += numero;
    }
  }
  numero++;
}
console.log("la suma es:", suma);
