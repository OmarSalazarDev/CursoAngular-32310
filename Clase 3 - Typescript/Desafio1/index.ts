import {Personaje} from './personaje'
import {Spiderman} from './spiderman'

let nombre: string = "Miguelito";
let edad: number = 30;
const PERSONAJE: Personaje = new Personaje(nombre, edad);
let PERSONAJE2: Spiderman = {
    nombre: "Peter Parker",
    poderes: ["Trepa murosr", "Lanzar telarañas"]
};

console.log(PERSONAJE2);
