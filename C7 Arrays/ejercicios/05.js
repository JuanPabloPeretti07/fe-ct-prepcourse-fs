function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
    array.unshift(elemento);
    return array
}
console.log(agregarItemAlComienzoDelArray(["tomate", "lechuga", "remolacha", "zanahoria"], "batata"))//Agrega batata como primer elemento

module.exports = agregarItemAlComienzoDelArray;
