//Objetos
console.log("Objetos")
const persona={
  id:1323,
  nombre:"Karla",
  edad:12
}

console.log(persona);

const persona2={...persona}


persona2.nombre="Carlos"
console.log(persona2)

//Arrays
console.log("Arrays")

const numeros=[1,2,3,4,5];
console.log(numeros)

const numeros2=[...numeros,8]
console.log(numeros2)