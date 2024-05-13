function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:
    // Verificar si cb es una función
    if (typeof cb === 'function') {
      // Si es una función, llamarla pasando los números como argumentos y retornar el resultado
      return cb(num1, num2);
    } else {
      // Si no es una función, retornar un mensaje de error
      return "El tercer argumento no es una función";
    }
  }
  function suma(a, b) {
    return a + b;
  }
  
  console.log(operacionMatematica(2, 3, suma)); // Devuelve: 5
  console.log(operacionMatematica(5, 7, null)); // Devuelve: "El tercer argumento no es una función"
  

module.exports = operacionMatematica;
