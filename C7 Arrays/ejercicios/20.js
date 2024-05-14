function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for (var i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) {
      return false;
    }
  }
  return true;
}
console.log(todosIguales(["papa", "papa", "papa", "papa"]))
console.log(todosIguales(["papa", "tomate", "salame", "queso"]))

module.exports = todosIguales;
