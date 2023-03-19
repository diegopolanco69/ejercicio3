// Crear un objeto de nombre user son las propiedades nombre, apellidos y edad, despues de crear el objeto crear una nueva variable llamada nombreCompleto de tipo string y guardar en esta variable el nombre y el apellido concatenados.

var user = {
  nombre: 'Diego',
  apellidos: 'Polanco',
  edad: 28
};

var nombreCompleto = 'El nombre completo es ' + user.nombre + ' ' + user.apellidos;

console.log(nombreCompleto);