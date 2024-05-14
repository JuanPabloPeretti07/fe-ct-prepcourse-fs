function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var nuevoArreglo = [];
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    num += 2;
    nuevoArreglo.push(num);
  }
  return nuevoArreglo;
}

console.log(continueStatement(2))//Devuelve [ 4,  6,  8, 10, 12, 14, 16, 18, 20]
console.log(continueStatement(8))//Devuelve [10, 12, 14, 16, 18,20, 22, 24, 26]

module.exports = continueStatement;
