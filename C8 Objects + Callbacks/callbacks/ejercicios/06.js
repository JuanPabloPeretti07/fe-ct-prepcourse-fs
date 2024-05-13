function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
    // Crear un nuevo arreglo para almacenar los resultados
    const newArray = [];
    
    // Iterar sobre el arreglo
    for (let i = 0; i < array.length; i++) {
      // Ejecutar el callback con cada elemento del arreglo y guardar el resultado en el nuevo arreglo
      newArray.push(cb(array[i]));
    }
  
    // Retornar el nuevo arreglo con los resultados
    return newArray;
  }  
  function duplicar(numero) {
    return numero * 2;
  }
  
  const arrayOriginal = [1, 2, 3, 4, 5];
  const arrayDuplicado = map(arrayOriginal, duplicar);
  
  console.log(arrayDuplicado); // Debe imprimir [2, 4, 6, 8, 10]
  


module.exports = map;
