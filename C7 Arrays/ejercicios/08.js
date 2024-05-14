function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
      // Busca el número pasado por argumento dentro del array.
      // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
      // Si no se encuentra, retorna -1.
      // Tu código:
      return array.indexOf(num);
}
console.log(encontrarElemento(34, [2, 6, 8, 34, 64, 23, 1, 9, 42]))//Devuelve 3
console.log(encontrarElemento(75, [2, 6, 8, 34, 64, 23, 1, 9, 42]))//Devuelve -1

module.exports = encontrarElemento;
