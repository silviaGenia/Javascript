const personajes =["goku", "vegeta", "trunks"]
console.log(personajes)

console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2])

console.log("Aquiiiii")

const [ ,  ,p3]=personajes
console.log( p3)


const retornArreglo=()=>{
  return ["ABC",123]
}

const[letras, numeros]=retornArreglo()
console.log(letras, numeros)


//Tarea
const useState =(valor)=>{
  return [valor, ()=>{
    console.log("Hola Clase")
  }]
}

const [nombre, setNombre]=useState("goku")
console.log(nombre)
setNombre()