import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {
  @Input() mensaje: string = "";
  @Output() eventoSalida: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.enviarMensaje();
  }

  enviarMensaje() {
    this.eventoSalida.emit({
      id: 1,
      mensaje: 'Hola, recibí la información, te envio este mensaje desde el componente hijo'
    });
  }

}
