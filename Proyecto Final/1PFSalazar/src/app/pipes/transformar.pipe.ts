import { Pipe, PipeTransform } from '@angular/core';
import { Alumnos } from '../components/students/students.component';


@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {


  transform(value: any): string {

    let resultado = value.name + ' ' + value.lastname;
    return resultado;
  }

}
