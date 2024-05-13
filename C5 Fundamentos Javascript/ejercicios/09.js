function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
    // Verificar si el valor es null o undefined y retornar true
    if (valor === null || typeof valor === 'undefined') {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplos de uso:
  console.log(esNuloOIndefinido(null)); // Salida: true
  console.log(esNuloOIndefinido(undefined)); // Salida: true
  console.log(esNuloOIndefinido(22)); // Salida: false
  console.log(esNuloOIndefinido("texto")); // Salida: false
  

module.exports = esNuloOIndefinido;