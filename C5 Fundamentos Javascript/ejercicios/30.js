function deEuroAdolar(euro) {
  // La función recibe un argumento llamado euro el cual es un numero.
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Suponiendo que 1 euro equivale a 1.20 dólares.
  // Retornar el valor en dolares.
  // Por ejemplo: 
  // 1 ---> 1.20
  // 0 ---> 0
  // Tu código:
  if (typeof euro === 'number') {
    // Calcular el valor en dólares multiplicando el valor en euros por 1.20
    return euro * 1.20;
  } else {
    // Si el argumento no es un número, devolver un mensaje de error
    return "El valor debe ser un número";
  }
}
console.log(deEuroAdolar(1)); // Devuelve: 1.20
console.log(deEuroAdolar(0)); // Devuelve: "El valor debe ser un número"
console.log(deEuroAdolar("Bicicleta")); // Devuelve: "El valor debe ser un número"


module.exports = deEuroAdolar;
