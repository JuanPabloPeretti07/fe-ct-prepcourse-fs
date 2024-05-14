function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

console.log(agregarItemAlFinalDelArray(["tomate", "lechuga", "remolacha", "zanahoria"], "papa"))//Agrega papa como último elemento

module.exports = agregarItemAlFinalDelArray;
