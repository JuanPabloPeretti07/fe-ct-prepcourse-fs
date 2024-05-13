function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
      // Sumar todos los números del arreglo
      const suma = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0);
      
      // Verificar si cb es una función
      if (typeof cb === 'function') {
        // Si es una función, llamarla pasando la suma como argumento
        cb(suma);
      }
    }
    function mostrarResultado(resultado) {
      console.log("El resultado de la suma es:", resultado);
    }
    
    sumarArray([1, 2, 3, 4, 5], mostrarResultado); // Debe mostrar: "El resultado de la suma es: 15"
    

module.exports = sumarArray;
