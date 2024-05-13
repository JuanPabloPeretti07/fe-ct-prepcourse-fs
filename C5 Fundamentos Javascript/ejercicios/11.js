function sonIguales(x, y) {
  // La función recibe dos argumentos llamados "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 5, 5 ---> true 
  // 5, 8 ---> false 
  // Tu código:
    // Comparar si x e y son iguales y retornar el resultado
    return x === y;
  }
  
  // Ejemplos de uso:
  console.log(sonIguales(5, 5)); // Salida: true
  console.log(sonIguales(5, 8)); // Salida: false

module.exports = sonIguales;