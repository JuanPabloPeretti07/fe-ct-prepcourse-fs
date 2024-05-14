function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tabla = [];
  for (var i = 0; i <= 10; i++) {
    tabla.push(6 * i);
  }
  return tabla;
}
console.log(tablaDelSeis())//Devuelve [   0,  6, 12, 18, 24, 30, 36, 42, 48, 54,60]

module.exports = tablaDelSeis;
