function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor
}

module.exports = esTipoDato;

console.log(esTipoDato("otoño"))
console.log(esTipoDato(19))
console.log(esTipoDato(true))
console.log(esTipoDato())