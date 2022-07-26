var Personaje = /** @class */ (function () {
    function Personaje(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Personaje;
}());
var nombre = "Miguelito";
var edad = 30;
var PERSONAJE = new Personaje(nombre, edad);
var PERSONAJE2 = {
    nombre: "Peter Parker",
    poderes: ["Trepa murosr", "Lanzar telarañas"]
};
console.log(PERSONAJE2);
