function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
   // Verificar si num1 es mayor a num2 y num3, y es positivo
   if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Numero 1 es mayor y positivo";
  }
    // Verificar si hay algún número negativo
    else if (num1 < 0 || num2 < 0 || num3 < 0) {
      return "Hay negativos";
    }
    // Verificar si num3 es mayor que num1 y num2
    else if (num3 > num1 && num3 > num2) {
      return num3 + 1;
    }
    
    // Verificar si todos los argumentos son cero
    else if (num1 === 0 && num2 === 0 && num3 === 0) {
      return "Error";
    }
 
 else{
    // Si no se cumple ninguna de las condiciones anteriores, retornar false
    return false;
 }
}
console.log(operadoresLogicos(5, -2, 3)); // Devuelve: "Hay negativos"
console.log(operadoresLogicos(0, 0, 0)); // Devuelve: "Error"
console.log(operadoresLogicos(6, 4, 7)); // Devuelve: 8
console.log(operadoresLogicos(10, 8, 6)); // Devuelve: "Numero 1 es mayor y positivo"
console.log(operadoresLogicos(3, 5, 8)); // Devuelve: 9

module.exports = operadoresLogicos;
