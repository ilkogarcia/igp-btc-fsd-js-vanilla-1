// Solución del ejercicio 5

// Inicializamos la variable y asignamos la entrada de teclado del usuario.
let testNumber = parseInt(prompt ("Introduzca un número entero cualquiera: "));

// Comprobamos si el número introducido por el usuario es divisible por 2.
if (testNumber%2 == 0) {
    console.log (testNumber + " es una número par divisible entre 2"); 
} else {
    console.log (testNumber + " es una número impar y no es divisible entre 2"); 
}