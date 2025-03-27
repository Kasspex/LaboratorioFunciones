function personas(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.saludar = function() {
        return "Hola, soy ", this.nombre, this.apellido," y tengo", this.edad,  "años.";
    };
}

let persona1 = new personas("Andres", "Homez", 21);
console.log(persona1.saludar())

//& Sin this
function Saludar(){
    return "Hola, soy Ana";
  }
  //& Con this
  function Gamer(nombre) {
    this.nombre = nombre;
    this.saludar = function() {
      return "Hola, soy " + this.nombre;
    };
  }
  let gamer5 = new Gamer("Ana");
  let gamer6 = new Gamer("Luis");
  console.log(gamer5.saludar(), gamer6.saludar());
  console.log(gamer5.saludar());
  console.log(gamer6.saludar());