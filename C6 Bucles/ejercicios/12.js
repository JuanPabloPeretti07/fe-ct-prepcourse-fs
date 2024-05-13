function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
   // Verificar si num es divisible entre 3 y/o 5
   if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    
return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return false;
  }
}
console.log(fizzBuzz(9)); // Devuelve: "fizz" (divisible entre 3)
console.log(fizzBuzz(10)); // Devuelve: "buzz" (divisible entre 5)
console.log(fizzBuzz(15)); // Devuelve: "fizzbuzz" (divisible entre 3 y 5)
console.log(fizzBuzz(7)); // Devuelve: false (no divisible entre 3 ni 5) 

module.exports = fizzBuzz;
