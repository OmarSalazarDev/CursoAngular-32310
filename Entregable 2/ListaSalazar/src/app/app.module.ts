import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { TituloDirective } from './directives/titulo.directive';
import { ListaDirective } from './directives/lista.directive';
import { ListadoPipe } from './pipes/listado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    TituloDirective,
    ListaDirective,
    ListadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
