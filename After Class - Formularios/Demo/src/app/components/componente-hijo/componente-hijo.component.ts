import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.scss']
})
export class ComponenteHijoComponent implements OnInit {
  @Input() functionPrueba!: (componente: string) => void;
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formulario = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.max(110)])
    });
  }

  ngOnInit(): void {
    this.functionPrueba("componente hijo");
  }

  submit() {
    console.log(this.formulario);
  }

}
