import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioContacto!: FormGroup;

  // formularioContacto: FormGroup = new FormGroup({
  //   nombre: new FormControl('', [Validators.required]),
  //   email: new FormControl('omarsalazar@gmail.com', [Validators.required, Validators.email]),
  //   mensaje: new FormControl('', [Validators.required])
  // })

  constructor(
    private fb: FormBuilder
  ) {
    this.formularioContacto = fb.group({
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('omarsalazar@gmail.com', [Validators.required, Validators.email]),
      mensaje: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  enviarContacto() {
    console.log(this.formularioContacto);
  }

}
