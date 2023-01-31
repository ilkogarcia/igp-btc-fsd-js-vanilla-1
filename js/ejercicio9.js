// Solución del ejercicio 9

let numbersDivBy2 = []; // Inicializamos array para los números divisbles por 2.
let numbersDivBy3 = []; // Inicializamos array para los números divisbles por 3.

/* En esta solución analizamos cada número del 1 al 100
para determinar su es divisibles por 2 o es divisible por 3 */

// Iteramos en un ciclo desde 1 a 100 y vamos analizando cada número para completar el array correspondiente.
for (let i = 1; i <= 100; i++) {
    if (i%2 == 0) {
        numbersDivBy2.push (i) // Agregamos cada número divisble por 2 al final del array
    } else if (i%3 == 0) {
        numbersDivBy3.push (i) // Agregamos cada número divisble por 3 al final del array
    }

}

// Mostramos las tablas completas por consola
console.table(numbersDivBy2);
console.table(numbersDivBy3);


/* Esta no es la solución del problema planteado
no obstante la he implementado para probar. En la misma 
calculamos los primeros 100 números divisibles por 2 y 
también los primeros 100 divisibles por 3 */

// Iteramos en un ciclo desde 1 a 100 y vamos calculando los números y completando el array correspondiente.
// for (let i = 1; i <= 100; i++) {
//     numbersDivBy2.push (i*2) // Agregamos cada número divisble por 2 al final del array
//     numbersDivBy3.push (i*3) // Agregamos cada número divisble por 3 al final del array
// }

// Mostramos las tablas completas por consola
// console.table(numbersDivBy2);
// console.table(numbersDivBy3);
