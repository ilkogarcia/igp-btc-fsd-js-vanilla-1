// Solución del ejercicio 12

// Contraseña por defecto hardcoded (ojo.. bad practice).
const defaultPassword = "abc";

// Por defecto el acceso a la app para el usuario esta bloqueado (false)
let accessGranted = false;

// Número máximo de intentos de acceso fallidos que queremos permitirle al usuario.
let maxFailedLogin = 3;

// Pedimos la contraseña almenos 1 vez y si falla damos otros maxFailedLogin-1 intentos
do {
    let userPassword = prompt ("Password: ");
    if (userPassword == defaultPassword) {
        accessGranted = true;
        console.log ("Enhorabuena!!! Acceso concedido");
    } else {
        maxFailedLogin -= 1; // Decrementamos en 1 el numero de intentos que le quedan al usuario.
    }
} while ( (accessGranted == false) && (maxFailedLogin > 0))

// Si se sale del ciclo y hemos agoitado el número de intentos de acceso, la app nos lo dirá
if (maxFailedLogin == 0) {
    console.log ("Número máximo de intentos fallidos agotado")
}

