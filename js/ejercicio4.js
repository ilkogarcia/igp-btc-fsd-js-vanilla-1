// Solución del ejercicio 4

// Incializamos la constante con el valor de PI (usamos mayusculas para diferenciar las constantes)
const PI = 3.141592;

// Inicializamos la variable para el radio del circulo y asuignamos la entrada de teclado del usuario.
let circleRadius = parseFloat (prompt ("Introduzca el valor del radio del círculo:"));

// Calculamos el área del círculo usando la constante PI y el radio introducido por el usuario.
let circleArea = PI * (circleRadius**2);

// Mostramos el resultado por consola
console.log ("El área del círculo es: " + circleArea); 
