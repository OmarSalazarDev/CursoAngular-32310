import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desafio1';

  obtenerMensaje(datos: any) {
    console.log(datos);
    this.title = datos.mensaje;
  }
}
