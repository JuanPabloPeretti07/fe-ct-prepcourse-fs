function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  switch(idioma) {
    case "aleman":
      return "Guten Tag!";
    case "mandarin":
      return "Ni Hao!";
    case "ingles":
      return "Hello";
   
    default:
      return "Hola!";
  }
}
console.log(saludo("aleman")); // Devuelve: "Guten Tag!"
console.log(saludo("mandarin")); // Devuelve: "Ni Hao!"
console.log(saludo("ingles")); // Devuelve: "Hello!"
console.log(saludo("frances")); // Devuelve: "Hola!"
console.log(saludo()); // Devuelve: "Hola!"

module.exports = saludo;
