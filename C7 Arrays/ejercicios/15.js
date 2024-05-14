function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let indiceMayor = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMayor]) {
      indiceMayor = i;
    }
  }
  return indiceMayor;
}
console.log(encontrarIndiceMayor([2, 6, 8, 34, 64, 23, 1, 9, 42]))//Devuelve 4 porque es el indice que tiene el número 64.

module.exports = encontrarIndiceMayor;
