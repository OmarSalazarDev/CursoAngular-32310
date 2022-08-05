import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioContacto!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formularioContacto = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      direccion: new FormControl('', [Validators.required]),
      nombreTarjeta: new FormControl('', [Validators.required]),
      numerotarjeta: new FormControl('', [Validators.required, Validators.pattern('[0-9]{16}')]),
      fechaVencimiento: new FormControl('', [Validators.required, Validators.pattern('[0-9]{2}/[0-9]{2}')]),
      cvv: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')])
    });
  }

  ngOnInit(): void {
  }

  enviarContacto() {
    console.log(this.formularioContacto);
  }

}
