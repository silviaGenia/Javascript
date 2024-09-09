/*do...while loop: Similar al while loop, pero se ejecuta al menos una vez.

//Cuales son los Numeros Pares
/**
 * do{}
 */

let i = 2;
while (i < 2) {
  if (i % 2 === 0) {
    console.log("Numero par con i", i);
  }
  i++;
}

let j = 2;
do {
  if (j % 2 === 0) {
    console.log("Numero par con j", j);
  }
  j++;
} while (j < 2);
