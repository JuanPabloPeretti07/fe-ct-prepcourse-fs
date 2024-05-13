function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  return num <50 && num > 20;
}
console.log(estaEnRango(25)); // Devuelve: true
console.log(estaEnRango(50)); // Devuelve: false
console.log(estaEnRango(20)); // Devuelve: false
console.log(estaEnRango(55)); // Devuelve: false

module.exports = estaEnRango;
