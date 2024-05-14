function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var contadorPares = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      continue;
    }
    contadorPares++;
  }
  return contadorPares;
}

console.log(contarParesConContinue([12, 14, 17, 33, 22, 50, 58, 21, 32, 4]))
console.log(contarParesConContinue([3, 25, 31, 20, 16, 14, 8, 7, 91, 44, 6]))


module.exports = contarParesConContinue;
