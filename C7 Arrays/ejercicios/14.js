function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var elementosMayoresA10 = array.filter(function(elemento) {
    return elemento > 10;
  });
  return elementosMayoresA10.length;
}
console.log(contarElementosMayoresA10([2, 6, 8, 34, 64, 23, 1, 9, 42]))//Devuelve 4


module.exports = contarElementosMayoresA10;
