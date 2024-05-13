function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
     // Inicializar la suma en 0
  let suma = 0;

  // Iterar desde 1 hasta n y sumar cada número
  for (let i = 1; i <= n; i++) {
    suma += i;
    
    
    suma += i;
  
// Verificar si la suma supera 100
    if (suma > 100) {
      break;
    }
  }

  
    
  
return suma;
   
}
console.log(sumarHastaNConBreak(10)); // Devuelve: 55 (1 + 2 + 3 + ... + 10)
console.log(sumarHastaNConBreak(15)); // Devuelve: 105 (1 + 2 + 3 + ... + 15, se detiene en 105)
console.log(sumarHastaNConBreak(20)); // Devuelve: 105 (1 + 2 + 3 + ... + 15, se detiene en 105)
console.log(sumarHastaNConBreak(1)); // Devuelve: 1 (1)

module.exports = sumarHastaNConBreak;
