function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
    // Mientras el número sea divisible por 2 y sea mayor que 1
    while (numero % 2 === 0 && numero > 1) {
      // Dividir el número por 2
      numero /= 2;
    }
    // Si el número resultante es 1, entonces el número original es una potencia de 2
    return numero === 1;
}
console.log(esPotenciaDeDos(4)); // Devuelve: true (2^2)
console.log(esPotenciaDeDos(16)); // Devuelve: true (2^4)
console.log(esPotenciaDeDos(5)); // Devuelve: false
console.log(esPotenciaDeDos(32)); // Devuelve: true (2^5)
console.log(esPotenciaDeDos(0)); // Devuelve: false (0 no es una potencia de 2)

module.exports = esPotenciaDeDos;
