// Solución del ejercicio 10

// Inicializamos en 0 el acumulado de ventas.
let totalSalesIncomes = 0; 

// Preguntamos al usuario cuál es el número de ventas realizadas.
let salesAmount = parseInt (prompt("Indique el número de ventas realizadas en el período: "));

// Iteramos tantas veces como ventas se han realizado.
for (let i = 1; i <= salesAmount; i++) {
    // Preguntamos al usuario el importe de cada venta y la sumamos al acumulado.
    totalSalesIncomes += parseInt(prompt("Cuál ha sido el importe de la venta " + i + "?"));
    // Mostramos por consola el subtotal en cada iteración menos en la última
    if (i < salesAmount) {
        console.log("El acumulado de ventas en este momento es de: " + totalSalesIncomes);
    }
}

// Mostramos el resultado por consola.
console.log("El total de ventas realizadas es de: " + totalSalesIncomes);
