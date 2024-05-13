function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
    // Verificar si num es igual a su valor redondeado
    return num === Math.round(num);
  }
  console.log(esEntero(0.8)); // Devuelve: false
console.log(esEntero(1)); // Devuelve: true
console.log(esEntero(-10)); // Devuelve: true
console.log(esEntero(5.5)); // Devuelve: false

module.exports = esEntero;
