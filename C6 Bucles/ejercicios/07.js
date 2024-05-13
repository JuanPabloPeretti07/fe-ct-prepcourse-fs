function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
    // Verificar si el número es par y divisible por tres
    return a % 2 === 0 && a % 3 === 0;
  }
  console.log(esParYDivisiblePorTres(6)); // Devuelve: true (es par y divisible por tres)
  console.log(esParYDivisiblePorTres(12)); // Devuelve: true (es par y divisible por tres)
  console.log(esParYDivisiblePorTres(9)); // Devuelve: false (es divisible por tres pero no es par)
  console.log(esParYDivisiblePorTres(7)); // Devuelve: false (no es divisible por tres ni es par)

module.exports = esParYDivisiblePorTres;