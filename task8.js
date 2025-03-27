const prompt = require("prompt-sync")();

function convertirMoneda (monto, monedaDestino){
    if(monedaDestino === "USD"){
        let total = (monto/4173).toFixed(2)
        console.log ("El monto en USD es: ", total);
    }else{
        let total = (monto/4505).toFixed(2)
        console.log ("El monto en EUR es: ", total)
    }
}

let monto = Number(prompt("Ingrese el monto en COP: "));
let destino = prompt("Ingrese a que modena cambiar (USD o EUR): ");

convertirMoneda(monto, destino);