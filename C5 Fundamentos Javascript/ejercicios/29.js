function areaDelTriangulo(base, altura) {
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:
  if (typeof base === 'number' && typeof altura === 'number' && base >= 0 && altura >= 0) {
    // Calcular el área del triángulo utilizando la fórmula
    return (base * altura) / 2;
  } else {
    // Si alguno de los argumentos no es un número positivo, devolver un mensaje de error
    
return "Los argumentos deben ser números positivos";
  }
}
console.log(areaDelTriangulo(10, 5)); // Devuelve: 8
console.log(areaDelTriangulo(0,10)); // Devuelve: 0
console.log(areaDelTriangulo(-1)); // Devuelve: "Los argumentos deben ser números positivos"


module.exports = areaDelTriangulo;
