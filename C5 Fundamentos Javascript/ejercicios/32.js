// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCubo(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cubo.
  // Por ejemplo: 
  // 3 ---> 27
  // 0 ---> 0
  // Tu código:
  // Elevar el número al cuadrado utilizando el operador de exponente **
  return num ** 3;
}

console.log(elevarAlCubo(3)); // Devuelve: 27
console.log(elevarAlCubo(0)); // Devuelve: 0

module.exports = elevarAlCubo;
