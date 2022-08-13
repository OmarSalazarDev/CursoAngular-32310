import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Abner García';
  familiares = [
    {
      nombre: 'Fran',
      apellido: 'Azid'
    },
    {
      nombre: 'Jeisson',
      apellido: 'Cortes'
    },
    {
      nombre: 'José',
      apellido: 'Hernandez'
    }
  ]
}
