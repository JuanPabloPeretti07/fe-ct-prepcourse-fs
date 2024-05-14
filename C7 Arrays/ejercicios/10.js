function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string' && array[i].length > 5) {
      return array[i];
    }
  }
  // Si no se encuentra ningún string con más de 5 caracteres, devolver null
  return null;
}
console.log(obtenerPrimerStringLargo(["pera", "kiwi", "naranja", "mandarina"]))//Devuelve naranja
console.log(obtenerPrimerStringLargo(["pera", "kiwi", "mango", "papa"]))//null

module.exports = obtenerPrimerStringLargo;
