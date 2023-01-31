// Solución del ejercicio 11

// Array con los días laborables de una semana.
const workingDays = ['monday','tuesday','wednesday', 'thursday','friday'];

// Array con los días no laborables de una semana.
const nonWorkingDays = ['saturday','sunday'];

// Preguntamos al usuario un día cualquiera de la semana.
let userDay = prompt('What day of the week do you want to check?:');

// Usamos un switch con una condición siempre positiva.
switch (true) {
    // Caso 1 - Comprobamos que el dia introducido esta dentro del array de días laborables.
    case (workingDays.includes(userDay)):
        console.log(userDay + 'is a working day');
    break;
    // Caso 2 - Comprobamos que el dia introducido esta dentro del array de días no laborables.
    case (nonWorkingDays.includes(userDay)):
        console.log(userDay + 'is a non-working day');
    break;
    // En el caso por defecto sería una entrada de datos incorrecta por parte del usuario.
    default:
        console.log('Sorry, your input is not a day name!');
    break;
}