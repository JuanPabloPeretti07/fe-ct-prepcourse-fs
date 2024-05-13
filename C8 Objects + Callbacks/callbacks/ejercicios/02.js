function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
    // Verificar si se recibió una función callback
  if (typeof callback === 'function') {
   // Si es así, aplicar la función callback al string y devolver el resultado
   return callback(string);
 } else {
   // Si no se recibe una función callback, devolver el string original
   return string;
 }
}
function mayusculas(texto) {
   return texto.toUpperCase();
 }
 
 console.log(cambiarCadena("hola", mayusculas)); // Devuelve: "HOLA"
 console.log(cambiarCadena("hola", null)); // Devuelve: "hola" (no se aplica ninguna función)
 

module.exports = cambiarCadena;
