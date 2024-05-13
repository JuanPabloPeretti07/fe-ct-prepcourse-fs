function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
    // Verificar si el número tiene tres dígitos
    return Math.abs(num) >= 100 && Math.abs(num) <= 999;
  }
  console.log(tieneTresDigitos(123)); // Devuelve: true
  console.log(tieneTresDigitos(-456)); // Devuelve: true
  console.log(tieneTresDigitos(7890)); // Devuelve: false
  console.log(tieneTresDigitos(0)); // Devuelve: false


module.exports = tieneTresDigitos;
