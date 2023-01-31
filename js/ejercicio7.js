// Solución del ejercicio 7

// Inicializamos la variable de control de ciclo y que servira ademas para calcular cada número.
let intNumber = 1;

// Primera solución más simple, iteramos en un ciclo desde 1 a 100 y vamos imprimiendo cada número.
// while (intNumber <= 100) {
//     console.log (intNumber);
//     intNumber += 1;
// }

// Segunda solución donde usamos console.table para mostrar los números del 1 al 100 en un array.
let arrNumbers = [];

// Iteramos en un ciclo desde 1 a 100 y vamos llenando el array con los números
while (intNumber <= 100) {
    arrNumbers.push (intNumber) // Agregamos cada número al final del array
    intNumber += 1;
}

// Mostramos la tabla completa por consola
console.table(arrNumbers);
