function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
    // Multiplica cada elemento del array por su índice.
    // Devuelve el nuevo arreglo con los resultados.
    // Tu código:
    return array.map(function(elemento, indice) {
      return elemento * indice;
    });
  }
  console.log(multiplicarElementosPorIndice([2, 6, 8, 34, 64, 23, 1, 9, 42]))//Devuelve[ 0, 6, 16, 102, 256,115, 6, 63, 336]  
  
module.exports = multiplicarElementosPorIndice;
