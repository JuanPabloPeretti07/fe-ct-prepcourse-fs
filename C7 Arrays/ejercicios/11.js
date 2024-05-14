function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  return array.map(function(elemento) {
    return elemento * 2;
}
  )
}
console.log(duplicarElementos([2, 6, 8, 34, 64, 23, 1, 9, 42]))//Devuelve duplicado cada elemento: [ 4, 12, 16, 68, 128,46,  2, 18, 84]

module.exports = duplicarElementos;
