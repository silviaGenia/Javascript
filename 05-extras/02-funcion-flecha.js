//Funcion estandar
function saludar(nombre){
 return `Hola, ${nombre}`
}

console.log(saludar("Karla"))

//funcion anonima
const saludar1=function(nombre){
   return `Hola, ${nombre}`
}
console.log(saludar("Carlos"))

//Funcion Flecha
const saludar2=(nombre)=>{
  return `Hola, ${nombre}`
}
console.log(saludar("Freddy"))

const saludar3=(nombre)=>`Hola, ${nombre}`
console.log(saludar("goku"))

const getUser=()=>{
  return{
    id:1233,
    nombre:"trunks",
  }
}

console.log(getUser())