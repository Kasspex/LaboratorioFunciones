
const prompt = require("prompt-sync")();
const usuarios = [
    {nombre: "Ana", edad: 25},
    {nombre: "Frank", edad: 15},
    {nombre: "Camila", edad: 18}
]

function filtrarUsuarios(usuarios,edadMinima){
    let arrayUsuarios = [];
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].edad >= edadMinima){
            arrayUsuarios.push(usuarios[i]);
        }        
    }
    return arrayUsuarios
}

let edadMinima = Number(prompt("Cual es la edad minima?"));
console.log("Los usuarios que cumplen con la edad son ", filtrarUsuarios(usuarios,edadMinima));


