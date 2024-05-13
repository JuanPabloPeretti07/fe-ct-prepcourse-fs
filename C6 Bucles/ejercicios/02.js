function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
    // Verificar si ambos booleanos son verdaderos
    if (booleano1 && booleano2) {

        return true;

    } else {
            return false;
    }
  }
console.log(esVerdaderoYFalso(true, true)); // Devuelve: true
console.log(esVerdaderoYFalso(true, false)); // Devuelve: false
console.log(esVerdaderoYFalso(false, true)); // Devuelve: false
console.log(esVerdaderoYFalso(false, false)); // Devuelve: false

module.exports = esVerdaderoYFalso;
