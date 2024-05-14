function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = resultadosTest.reduce(function(acumulador, nota) {
    return acumulador + nota;
  }, 0);
  return suma / resultadosTest.length;
}
console.log(promedioResultadosTest([2, 6, 8, 1, 9, 5]))

module.exports = promedioResultadosTest;
