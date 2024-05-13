const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
    // Iterar sobre el arreglo
    for (let i = 0; i < array.length; i++) {
      // Llamar a la función de callback para evaluar si el elemento cumple con la condición
      if (callback(array[i])) {
        // Si el elemento cumple con la condición, retornarlo
        return array[i];
      }
    }
    // Si el elemento no se encuentra, devolver el mensaje "No se encontró el elemento"
    return "No se encontró el elemento";
  };

module.exports = buscarElemento;
