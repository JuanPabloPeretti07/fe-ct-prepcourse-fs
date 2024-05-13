function retornarPerimetro(lado) {
   // La función recibe un argumento llamado lado el cual es un numero.
   // Retornar el perimetro de un cuadrado.
   // Por ejemplo: 
   // 2 ---> 8
   // 0 ---> 0
   // Tu código:
   if (typeof lado === 'number' && lado >=  0) {
      // Calcular el área del rectángulo multiplicando el alto por el ancho
      return lado*4;
    } else {
      // Si alguno de los argumentos no es un número positivo, devolver un mensaje de error
      return "Los argumentos deben ser números positivos";
    }  
}
console.log(retornarPerimetro(2)); // Devuelve: 8
console.log(retornarPerimetro(0)); // Devuelve: 0
console.log(retornarPerimetro(-1)); // Devuelve: "Los argumentos deben ser números positivos"


module.exports = retornarPerimetro;
