const prompt = require("prompt-sync")();
const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 }
    ];

let nombre = prompt("Ingrese el nombre del producto: ");


function buscarProducto (nombre, inventario){
    for(let i = 0; i < inventario.length; i++){
        if(inventario[i].nombre === nombre){
            return inventario[i];
            }
    }
    return null
}

console.log(buscarProducto(nombre, inventario));