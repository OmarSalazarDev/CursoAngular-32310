import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  private observableProfesores: Observable<any>;

  constructor() {
    this.observableProfesores = new Observable<any>((suscriptor) => {
      let profesores = [];
      suscriptor.next([
        { nombre: 'Abner', apellido: 'Garcia' }
      ]);

      suscriptor.next([
        { nombre: 'Abner', apellido: 'Garcia' },
        { nombre: 'Lautaro', apellido: 'Garcia' }
      ]);

      setTimeout(() => {
        suscriptor.next([
          { nombre: 'Lautaro', apellido: 'Garcia' }
        ]);
      }, 3000);

      if (profesores.length === 0) {
        suscriptor.error('No hay profesores');
      }

      suscriptor.complete();

    });

    // (new EventEmitter).emit();
  }

  obtenerProfesores() {
    return this.observableProfesores;
  }
}
