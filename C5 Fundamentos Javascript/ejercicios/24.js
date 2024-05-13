function agregarSimboloExclamacion(str) {
  // La función recibe un argumento llamado str el cual es un string.
  // Agrega un símbolo de exclamación al final del string str y retórnalo.
  // Por ejemplo: 
  // "hello world" ---> "hello world!"
  // Tu código:
  if (typeof str === 'string') {
    // Agregar un símbolo de exclamación al final de la cadena
  
return str + '!';
  } else {
    // Si el argumento no es una cadena, devolver un mensaje de error
    return "Dato incorrecto";
  }
}
console.log(agregarSimboloExclamacion("hello world"))
console.log(agregarSimboloExclamacion(16))


module.exports = agregarSimboloExclamacion;
