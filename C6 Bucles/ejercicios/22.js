function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  
  let contador = 0; // Para llevar la cuenta de las iteraciones
  
 
do {
    num += 5; // Aumentar num en 5 en cada iteración
    contador++; 
    contador++;
// Incrementar el contador de iteraciones
  } while (contador < 8); // Continuar mientras el contador sea menor que 8
  return num; // Devolver el valor final de num
}
console.log(doWhile(0)); // Devuelve: 40 (0 + 5 * 8 = 40)
console.log(doWhile(10)); // Devuelve: 90 (10 + 5 * 8 = 90)
console.log(doWhile(-3)); // Devuelve: 37 (-3 + 5 * 8 = 37)


module.exports = doWhile;