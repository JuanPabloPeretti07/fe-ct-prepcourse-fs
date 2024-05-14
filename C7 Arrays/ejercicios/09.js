function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

console.log(obtenerElementoAleatorio([2, 6, 8, 34, 64, 23, 1, 9, 42]))//Devuelve un elemento aleatorio del array: 64

module.exports = obtenerElementoAleatorio;
