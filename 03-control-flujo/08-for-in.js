//for...in loop: Usado para iterar sobre propiedades enumerables de un objeto.
//El loop "for -in" se utiliza en objetos enumerables

let user = {
  id: 1,
  nombre: "keyla",
  edad: 25,
};

for (let prop in user) {
  //console.log(prop);
  console.log(prop, user[prop]); //acceder a sus valores
}
