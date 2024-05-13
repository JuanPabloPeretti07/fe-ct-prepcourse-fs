function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   return a > 0 && a < 10;
}
console.log(esPositivoOInferiorA10(5)); // Devuelve: true
console.log(esPositivoOInferiorA10(9)); // Devuelve: true
console.log(esPositivoOInferiorA10(10)); // Devuelve: false
console.log(esPositivoOInferiorA10(-3)); // Devuelve: false

module.exports = esPositivoOInferiorA10;
