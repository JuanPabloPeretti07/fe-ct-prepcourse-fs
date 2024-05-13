function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
    if (typeof letra === 'string' && letra.length === 1) {
      // Convertir la letra a minúscula para hacer la comparación más sencilla
      letra = letra.toLowerCase();
      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        return "Es vocal";
      } else {
        return "Dato incorrecto";
      }
    } else {
      return "Dato incorrecto";
    }
  }
console.log(esVocal("a")); // Devuelve: "Es vocal"
console.log(esVocal("u")); // Devuelve: "Es vocal"
console.log(esVocal("n")); // Devuelve: "Dato incorrecto"
console.log(esVocal("texto largo")); // Devuelve: "Dato incorrecto"

module.exports = esVocal;
