function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var usuario = {
    nombre: nombre,
    email: email,
    password: password
  };
  return usuario;
}
console.log(nuevoUsuario("Juan","juan@email.com", 134568))

module.exports = nuevoUsuario;
