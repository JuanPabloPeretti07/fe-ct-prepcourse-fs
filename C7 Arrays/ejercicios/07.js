function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort(function(a, b) {
    return a - b;
}
  )
}
console.log(ordenarArray(["tomate", "lechuga", "remolacha", "zanahoria"]))

module.exports = ordenarArray;
