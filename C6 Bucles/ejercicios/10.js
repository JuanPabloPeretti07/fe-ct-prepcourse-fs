function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  return num === 10 || num === 5;
}
console.log(esDiezOCinco(10)); // Devuelve: true
console.log(esDiezOCinco(5)); // Devuelve: true
console.log(esDiezOCinco(7)); // Devuelve: false
console.log(esDiezOCinco(0)); // Devuelve: false

module.exports = esDiezOCinco;
