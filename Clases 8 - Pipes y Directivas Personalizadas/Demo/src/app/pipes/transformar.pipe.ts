import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {
  meses: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  transform(value: {fechaInicio: Date, fechaFin: Date}, ...args: any[]): unknown {
    // transform(value: any): unknown {
    /*
    {
      fechaInicio: Date,
      fechafin: Date
    }
    */
   const texto = args[0] || 'vacio';
   let resultado: string = '';
   console.log(value, args);

   if (texto === 'uppercase') {
    return resultado.toUpperCase();
   } else {
    return resultado;
   }

    resultado = "De " + this.meses[value.fechaInicio.getMonth()] + " a " + this.meses[value.fechaFin.getMonth()];
    return resultado;
  }
}
