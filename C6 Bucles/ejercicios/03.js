function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
   // Verificar cuál de los dos números es mayor
   if (x >= y) {
               return x;
  } else {
    return y;
  }
}
console.log(obtenerMayor(5, 3)); // Devuelve: 5
console.log(obtenerMayor(3, 5)); // Devuelve: 5
console.log(obtenerMayor(5, 5)); // Devuelve: 5

module.exports = obtenerMayor;
