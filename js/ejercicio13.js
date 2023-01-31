// Solución del ejercicio 13 (Calculadora Inversa)

// Pedimos al usuario el primer operando y lo asignamos a una variable.
let operandoUno = parseInt(prompt("Introduzca el primer operando: "));

// Pedimos al usuario el segundo operando y lo asignamos a otra variable.
let operandoDos = parseInt(prompt("Introduzca el segundo operando: "));

// Pedimos al usuario el signo aritmético u operador.
let signoAritmetico = prompt("Introduzca el signo aritmético: ");

// Usaremos esta variable para calcular el resultado de la operación.
let resultado = 0;

switch (true) {
    // +: suma los dos operandos.
    case (signoAritmetico == "+"): 
        resultado = operandoUno + operandoDos;
    break;
    // -: resta los operandos.
    case (signoAritmetico == "-"):
        resultado = operandoUno - operandoDos;
    break;
    // *: multiplica los operandos.
    case (signoAritmetico == "*"):
        resultado = operandoUno * operandoDos;
    break;
    // /: divide los operandos, este debe dar un resultado con decimales (double)
    case (signoAritmetico == "/"):
        resultado = operandoUno / operandoDos;
    break;
    // ^: 1o operando como base y 2o como exponente.
    case (signoAritmetico == "^"):
        resultado = operandoUno ** operandoDos;
    break;
    // %: módulo, resto de la división entre operando1 y operando2.
    case (signoAritmetico == "%"):
        resultado = operandoUno % operandoDos;
    break;
    // No se ha introducido un signo aritmético válido.
    default:
        console.log ('Warnig: El signo aritmético no es valido!!!')
        alert ('Warnig: El signo aritmético no es valido!!!')
    break;
}
if (resultado |= 0) {
    console.log (resultado);
    alert (resultado);
}

