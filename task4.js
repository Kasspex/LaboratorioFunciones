const prompt = require("prompt-sync")();

function calcularPromedio(arrayNotas){
let sumaNotas = 0;
    for(let i = 0; i < arrayNotas.length; i++){
        sumaNotas = sumaNotas + Number(arrayNotas[i]);
    }
    let promedio = sumaNotas/(arrayNotas.length)
    return promedio.toFixed(2)
}

let notas = prompt("Ingrese todas las notas ")
let arrayNotas = notas.split(",")

console.log("El promedio de las notas es ", calcularPromedio(arrayNotas))