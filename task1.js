const prompt = require("prompt-sync")();

let total = Number(prompt("Por favor, ingrese el total de la cuenta "));
let porcentaje = Number(prompt("Cual es el porcentaje de la propina (solo entero)"))

console.log("EL TOTAL CON PROPINA ES " ,calcularPropina(total,porcentaje))


function calcularPropina(total, porcentaje){
porcentajeFinal = (porcentaje/100) * total
totalfinal = total + porcentajeFinal

return totalfinal
}