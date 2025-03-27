const prompt = require("prompt-sync")();
let contrasena = prompt("Ingresa tu contraseña: ")

function validarContrasena (contrasena){
    if(contrasena.length >= 8 && /\d/.test(contrasena && /[A-Z]/.test(contrasena))){
        return true
    }else{
        return false
    }
}


if(validarContrasena(contrasena)){
    console.log("Tu contraseña es valida")
}else{
    console.log("Tu contraseña es invalida");
    
}
