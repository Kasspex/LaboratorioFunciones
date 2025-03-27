const prompt = require("prompt-sync")();

function contarPalabras(texto){
    let textoSeparado = texto.split(" ")
    let totalPalabras = textoSeparado.length
    return totalPalabras
}

let texto = prompt("Ingresa la frase: ");
console.log("El total de palabras es: ", contarPalabras(texto));
