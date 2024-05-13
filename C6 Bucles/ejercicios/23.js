function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
    // Un número primo debe ser mayor que 1
    if (numero <= 1) {
      return false;
    }
    
    // Verificar si el número es divisible por algún número entre 2 y su mitad
    for (let i = 2; i <= Math.floor(numero / 2); i++) {
      if (numero % i === 0) {
        return false; // Si es divisible, no es primo
      }
    }
  
    return true; // Si no es divisible por ningún número, es primo
  }
  console.log(esNumeroPrimo(2)); // Devuelve: true
  console.log(esNumeroPrimo(7)); // Devuelve: true
  console.log(esNumeroPrimo(4)); // Devuelve: false
  console.log(esNumeroPrimo(11)); // Devuelve: true
  console.log(esNumeroPrimo(1)); // Devuelve: false (1 no es primo)

module.exports = esNumeroPrimo;
