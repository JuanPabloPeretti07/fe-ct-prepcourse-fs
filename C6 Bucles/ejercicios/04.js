function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
    // Verificar si la edad es mayor o igual a 18
    if (edad >= 18) {
      return "Allowed";
    } else {
      return "Not allowed";
    }
  }
  console.log(mayoriaDeEdad(18))
  console.log(mayoriaDeEdad(15))
  console.log(mayoriaDeEdad(21))

module.exports = mayoriaDeEdad;
