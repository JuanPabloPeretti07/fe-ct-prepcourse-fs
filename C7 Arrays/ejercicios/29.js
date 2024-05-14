function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }

  var sumaEsperada = (numeros.length + 1) * (numeros[0] + numeros[numeros.length - 1]) / 2;
  var sumaActual = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);

  if (sumaEsperada === sumaActual) {
    return null;
  } else {
    return sumaEsperada - sumaActual;
  }
}
console.log(encontrarNumeroFaltante([12, 13, 14, 19, 25, 22, 7]))

module.exports = encontrarNumeroFaltante;