function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  // Verificar si el valor es verdadero
  if (valor) {
        return "Soy verdadero";
      } else {
        return "Soy falso";
      }
    }
console.log(esVerdadero(true)); // Devuelve: "Soy verdadero"
console.log(esVerdadero(false)); // Devuelve: "Soy falso"
console.log(esVerdadero(0)); // Devuelve: "Soy falso"

module.exports = esVerdadero;
