function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  // Verificar si a es mayor que b
  if (a > b) {
    return "Error: a debe ser menor o igual que b";
  }

  // Inicializar el producto como 1
  let producto = 1;

  // Calcular el producto de todos los números entre a y b
  for (let i = a; i <= b; i++) {
    producto *= i;
  }

  return producto;
}
console.log(productoEntreNúmeros(1, 5)); // Devuelve: 120 (1 * 2 * 3 * 4 * 5)
console.log(productoEntreNúmeros(3, 7)); // Devuelve: 2520 (3 * 4 * 5 * 6 * 7)
console.log(productoEntreNúmeros(5, 3)); // Devuelve: "Error: a debe ser menor o igual que b"

module.exports = productoEntreNúmeros;