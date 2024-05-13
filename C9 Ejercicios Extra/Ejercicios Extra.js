/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
    // Usar Object.entries() para obtener un arreglo de arreglos de pares clave-valor
    var arrayDeArrays = Object.entries(objeto);
    
    // Retornar el arreglo de arreglos
    return arrayDeArrays;
  }
  

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
    var charCount = {}; // Objeto para almacenar las cuentas de cada letra
  
    // Recorrer el string
    for (var i = 0; i < string.length; i++) {
      var char = string[i]; // Carácter actual
  
      // Verificar si el carácter ya está en el objeto
      if (charCount[char]) {
        // Si ya existe, incrementar el contador
        charCount[char]++;
      } else {
        // Si no existe, crear una nueva propiedad con contador inicializado en 1
        charCount[char] = 1;
      }
    }
  
    // Ordenar el objeto alfabéticamente por las claves (letras)
    var sortedCharCount = {};
    Object.keys(charCount).sort().forEach(function(key) {
      sortedCharCount[key] = charCount[key];
    });
  
    // Retornar el objeto con las cuentas de cada letra
    return sortedCharCount;
  }
  
  // Ejemplo de uso:
  console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"));
  

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
    var uppercaseChars = ""; // String para almacenar las letras mayúsculas
    var lowercaseChars = ""; // String para almacenar las letras minúsculas
  
    // Recorrer el string de entrada
    for (var i = 0; i < string.length; i++) {
      var char = string[i]; // Carácter actual
  
      // Verificar si el carácter es una letra mayúscula o minúscula
      if (char === char.toUpperCase()) {
        // Si es mayúscula, agregarla al string de letras mayúsculas
        uppercaseChars += char;
      } else {
        // Si es minúscula, agregarla al string de letras minúsculas
        lowercaseChars += char;
      }
    }
  
    // Concatenar el string de letras mayúsculas con el string de letras minúsculas
    var result = uppercaseChars + lowercaseChars;
  
    // Retornar el resultado
    return result;
  }
  
  // Ejemplo de uso:
  console.log(capToFront("soyHENRY")); // Debería imprimir "HENRYsoy"
  


function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
    // Dividir la frase en palabras individuales
    var palabras = frase.split(' ');
    
    // Invertir cada palabra
    var palabrasInvertidas = palabras.map(function(palabra) {
      return palabra.split('').reverse().join('');
    });
    
    // Unir las palabras invertidas en una sola cadena
    var fraseInvertida = palabrasInvertidas.join(' ');
    
    // Devolver la frase invertida
    return fraseInvertida;
  }
  
  // Ejemplo de uso:
  var fraseOriginal = "The Henry Challenge is close!";
  var fraseInvertida = asAmirror(fraseOriginal);
  console.log(fraseInvertida); // Salida: "ehT yrneH egnellahC si !esolc"
  

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
    // Convertir el número en una cadena
    var numeroStr = numero.toString();
    
    // Invertir la cadena
    var numeroInvertido = numeroStr.split('').reverse().join('');
    
    // Comparar la cadena original con la invertida
    if (numeroStr === numeroInvertido) {
      return "Es capicua";
    } else {
      return "No es capicua";
    }
  }
  
  // Ejemplo de uso:
  console.log(capicua(121)); // Salida: "Es capicua"
  console.log(capicua(123)); // Salida: "No es capicua"
  

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
    // Eliminar las letras "a", "b" y "c" del string utilizando el método replace()
    var resultado = string.replace(/[abc]/g, '');
    
    // Retornar el string resultante
    return resultado;
  }
  
  // Ejemplo de uso:
  console.log(deleteAbc("abcdefg")); // Salida: "defg"
  console.log(deleteAbc("abc123abc456abc")); // Salida: "123456"
  


function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
    // Ordenar el arreglo de strings según la longitud de cada string
    var newArray = arrayOfStrings.sort(function(a, b) {
      return a.length - b.length;
    });
    
    // Retornar el nuevo arreglo ordenado
    return newArray;
  }
  
  // Ejemplo de uso:
  var palabras = ["You", "are", "beautiful", "looking"];
  var palabrasOrdenadas = sortArray(palabras);
  console.log(palabrasOrdenadas); // Salida: ["You", "are", "looking", "beautiful"]
  

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
    // Crear un conjunto a partir de array1
    var set1 = new Set(array1);
    
    // Filtrar array2 para incluir solo los elementos que también están en set1
    var interseccion = array2.filter(function(elemento) {
      return set1.has(elemento);
    });
    
    // Retornar la intersección como un arreglo
    return interseccion;
  }
  
  // Ejemplo de uso:
  var arreglo1 = [4, 2, 3];
  var arreglo2 = [1, 3, 4];
  var interseccion = buscoInterseccion(arreglo1, arreglo2);
  console.log(interseccion); // Salida: [3, 4]
  


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
