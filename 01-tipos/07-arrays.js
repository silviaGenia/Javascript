//listado de animales
let animales = ["vaca", "toro", "oveja"];

console.log(animales);
console.log(animales[0]);

//Agregar Elementos
animales[3] = "dragón";
console.log(animales);

//Tener cuidado al agrgar un elemento
animales[10] = "pez";
console.log(animales);
console.log(animales[7]);
console.log(typeof animales);
console.log(animales.length);

//Un arreglo es una coleccion de informacion en una variable
//const arreglo = new Array();

let arreglo = [1, 2, 3, 4];

let arreglo2 = [...5];
console.log(arreglo);
console.log(arreglo2);
