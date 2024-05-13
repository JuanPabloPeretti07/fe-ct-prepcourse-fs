function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   

   // Filtrar los elementos que comienzan con "a"
   var filteredArray = arrayOfStrings.filter(function(element) {
       return element.startsWith('a');
   });

   // Retornar el nuevo arreglo filtrado
   return filteredArray;
}



module.exports = filter;
