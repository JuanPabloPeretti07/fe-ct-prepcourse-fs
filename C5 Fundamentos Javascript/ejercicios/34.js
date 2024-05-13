// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
   // La función recibe un argumento llamado num el cual es un numero.
   // Debes redondear "num" al entero más próximo y retornarlo.
   // Por ejemplo: 
   // 1.5 ---> 2
   // 0.1 ---> 0
   // Tu código:
   // Redondear el número al entero más cercano usando Math.round()
  return Math.round(num);
}
console.log(redondearNumero(1.5)); // Devuelve: 2
console.log(redondearNumero(0.1)); // Devuelve: 0


module.exports = redondearNumero;
