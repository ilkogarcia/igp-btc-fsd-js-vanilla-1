// Solución del ejercicio 6

// Inicializamos la constante IVA (que equivale actualmete al 21%)
const SPAIN_TAX_IVA = 21;

// Inicializamos la variable de precio de un producto y asignamos la entrada de teclado del usuario.
let productPrice = parseFloat(prompt("Indique el precio del producto: "));

// Calculamos el precio final del producto aplicando el IVA.
productPrice += (productPrice * SPAIN_TAX_IVA / 100);

// Mostramos por consola el precio una vez aplicado el IVA.
console.log("El precio final del prodcuto es de: " + productPrice);