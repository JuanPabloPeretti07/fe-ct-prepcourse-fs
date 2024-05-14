function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var elementosVistos = {};

  for (var i = 0; i < numeros.length; i++) {
    if (elementosVistos[numeros[i]] !== undefined) {
      return numeros[i];
    } else {
      elementosVistos[numeros[i]] = true;
    }
  }

  return null; // Si no se encuentra ningún elemento repetido
}
console.log(encontrarElementoRepetido([12, 19, 14, 4, 6, 81, 10, 34, 20, 54, 38, 19, 52, 34]))//Devuelve 19
console.log(encontrarElementoRepetido([12, 19, 14, 4, 6, 81, 10, 34, 20, 54, 38]))

module.exports = encontrarElementoRepetido;