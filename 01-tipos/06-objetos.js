//personajes
let nombre = "katerine";
let anime = "goku";
let edad = 12;

let personajes = {
  nombre: "katerine",
  anime: "goku",
  edad: 12,
};

console.log(personajes);
console.log(personajes.nombre);
console.log(personajes["anime"]);

//Modificar una propiedad

personajes.nombre = "genio";
//Si no se conoce el nombre de la propiedad y vas iterar las propiedades de un objeto
//ejemplo
/*
let llave = "edad";
personajes[llave]=12;
*/
personajes["edad"] = "genio1";

//Eliminar una propiedad
delete personajes.anime;

console.log(personajes);

//FH
//los objetos trabajan con pares de valores
const persona = {
  nombre: "Tonny",
  apellido: "Stark",
  edad: 45,
  //se pueden añadir funciones, objetos
  direccion: {
    ciudad: "New York",
    zip: 512124,
    lat: 45424,
    lang: 245454,
  },
};

console.log(persona);
console.table(persona);

//quiero clonar este objeto
//lo que estamos haciendo es una asignacion de este tipo
//Estamos copiando la referencia al espacio de memoria de esta variable
//Estamos haciendo la copia de la referencia
/* const persona2 = persona;
persona2.nombre = "peter;"; */

//Si quieres hacer un clon
const persona2 = { ...persona };
console.log(persona2);
