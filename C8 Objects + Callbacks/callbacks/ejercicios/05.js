function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
    // Iterar sobre el arreglo
    for (let i = 0; i < array.length; i++) {
      // Ejecutar el callback con cada elemento del arreglo
      cb(array[i]);
    }
  }
  function imprimirElemento(elemento) {
    console.log(elemento);
  }
  
  forEach([1, 2, 3, 4, 5], imprimirElemento); // Debe imprimir cada elemento del arreglo en la consola
  

module.exports = forEach;
