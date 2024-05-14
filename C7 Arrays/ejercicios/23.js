function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
    // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retórnarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
    // Tu código:
    var nuevoArreglo = [];
    for (var i = 0; i < 10; i++) {
      num += 2;
      nuevoArreglo.push(num);
      if (num === i) {
        return "Se interrumpió la ejecución";
      }
    }
    return nuevoArreglo;
  }
  
  console.log(breakStatement(2))//Devuelve [4,  6,  8, 10, 12,14, 16, 18, 20, 22]
  console.log(breakStatement(0))//Devuelve [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20] 

module.exports = breakStatement;
