function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
  }, 0);
}
console.log(agregarNumeros([2, 6, 8, 34, 64, 23, 1, 9, 42]))//Devuelve 189

module.exports = agregarNumeros;
