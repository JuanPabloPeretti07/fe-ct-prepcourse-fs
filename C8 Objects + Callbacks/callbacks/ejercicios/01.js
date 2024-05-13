function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // NOTA: no debes retornar nada.
   // Tu código:
   cb(); // Llamar al callback
}
function miCallback() {
   console.log("¡Hola desde el callback!");
 }
 
 invocarCallback(miCallback); // Imprimirá: "¡Hola desde el callback!"
 

module.exports = invocarCallback;
