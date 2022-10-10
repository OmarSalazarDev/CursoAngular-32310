import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  metodoPruebaPadre(componente: string) {
    console.log(componente + ": Hola mundo");
  }
}
