import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos = [
    {nombre: 'Juan', apellidos: 'Godoy', edad: 20, curso: 'Angular'},
    {nombre: 'Pedro', apellidos: 'Perez', edad: 21, curso: 'Angular'},
    {nombre: 'Maria', apellidos: 'Gomez', edad: 22, curso: 'Angular'},
    {nombre: 'Jose', apellidos: 'Lopez', edad: 16, curso: 'Angular'},
    {nombre: 'Luis', apellidos: 'Gonzales', edad: 24, curso: 'Angular'},
    {nombre: 'Ana', apellidos: 'Salazar', edad: 12, curso: 'Angular'},
    {nombre: 'Luisa', apellidos: 'Garcia', edad: 66, curso: 'Angular'},
    {nombre: 'Rosa', apellidos: 'Silva', edad: 27, curso: 'Angular'},
    {nombre: 'Stefanny', apellidos: 'Torres', edad: 28, curso: 'Angular'},
    {nombre: 'Jenner', apellidos: 'Salas', edad: 19, curso: 'Angular'},
    {nombre: 'Gian', apellidos: 'Torrin', edad: 30, curso: 'Angular'},
    {nombre: 'Yulissa', apellidos: 'Obregon', edad: 18, curso: 'Angular'},
    {nombre: 'Federico', apellidos: 'Evangelista', edad: 17, curso: 'Angular'},
    {nombre: 'Jorge', apellidos: 'Trejo', edad: 22, curso: 'Angular'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
