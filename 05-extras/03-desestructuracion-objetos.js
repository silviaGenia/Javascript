//Desestructuracion
//Asignacion Desestructurante




const persona={
  nombre:"Karla",
  edad:45,
  apellido:"perez",
  clave:12
}
/*console.log(persona)
*/
console.log(persona.nombre)
console.log(persona.edad)


console.log("Desestructuracion")
const {nombre,edad}=persona
console.log(nombre)
console.log(edad)

const retornaPersona=(usuario)=>{
  console.log(usuario)
}
retornaPersona(persona)


const retornaPersona1=(usuario)=>{
 const {nombre, edad}=usuario
 console.log(nombre, edad)
}
retornaPersona1(persona)

console.log("Aqui estoy!!!!")

const retornaPersona2= ({nombre, edad, id=32})=>{
  console.log(nombre, edad,id)
}
retornaPersona2(persona)

const cantante={
  nombre:"Bruno",
  genero:"Rock",
  albun:12
}

const useContext=({nombre, genero})=>{
  //console.log(nombre, genero)
  return{
    nombreClave:nombre,
    generoArtistico:genero,
    personalArtis:{
      años:36,
      altura:1.80
    }
  }
}

const {nombreClave,generoArtistico, personalArtis:{años, altura}}=useContext(cantante)

console.log(nombreClave, generoArtistico, años, altura)
//console.log()