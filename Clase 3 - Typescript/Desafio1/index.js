"use strict";
exports.__esModule = true;
var personaje_1 = require("./personaje");
var nombre = "Miguelito";
var edad = 30;
var PERSONAJE = new personaje_1.Personaje(nombre, edad);
var PERSONAJE2 = {
    nombre: "Peter Parker",
    poderes: ["Trepa murosr", "Lanzar telarañas"]
};
console.log(PERSONAJE2);
