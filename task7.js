const prompt = require("prompt-sync")();

function retirarDinero (saldo, monto){
    if(monto > saldo){
        console.log("Fondos insuficientes");
    }else{
        let nuevoSaldo = saldo - monto;
        console.log("Su nuevo saldo es: ", nuevoSaldo);
        
    }
}

let saldoActual = Number(prompt("Ingrese su saldo actual: "));
let montoRetiro = Number(prompt("Ingrese el monto a retirar: "));

retirarDinero(saldoActual, montoRetiro)