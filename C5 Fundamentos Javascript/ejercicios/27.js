function obtenerAreaRectangulo(alto, ancho) {
  // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 2 ---> 2
  // Tu código:
    // Verificar si ambos argumentos son números positivos
    if (typeof alto === 'number' && typeof ancho === 'number' && alto >= 0 && ancho >= 0) {
      // Calcular el área del rectángulo multiplicando el alto por el ancho
      return alto * ancho;
    } else {
      // Si alguno de los argumentos no es un número positivo, devolver un mensaje de error
      return "Los argumentos deben ser números positivos";
    }   
}
console.log(obtenerAreaRectangulo(2, 2)); // Devuelve: 4
console.log(obtenerAreaRectangulo(0, 2)); // Devuelve: 0
console.log(obtenerAreaRectangulo(-1, 2)); // Devuelve: "Los argumentos deben ser números positivos"

module.exports = obtenerAreaRectangulo;
