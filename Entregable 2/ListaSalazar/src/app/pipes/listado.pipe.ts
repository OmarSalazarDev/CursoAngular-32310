import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listado'
})
export class ListadoPipe implements PipeTransform {

  transform(value: {nombre: string, apellidos: string}): unknown {
    let resultado: string = '';

    resultado = value.nombre + "  " + value.apellidos;
    return resultado;
  }

}
