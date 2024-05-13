function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  function sumarHastaN(n) {
    // Inicializar la suma en 0
    let suma = 0;
  
    // Iterar desde 1 hasta n y sumar cada número
    for (let i = 1; i <= n; i++) {
      suma += i;
    }
  
    return suma;
  }
}
console.log(sumarHastaN(5)); // Devuelve: 15 (1 + 2 + 3 + 4 + 5)
console.log(sumarHastaN(10)); // Devuelve: 55 (1 + 2 + 3 + ... + 10)
console.log(sumarHastaN(1)); // Devuelve: 1 (1)
console.log(sumarHastaN(0)); // Devuelve: 0 (no hay números para sumar)


module.exports = sumarHastaN;
