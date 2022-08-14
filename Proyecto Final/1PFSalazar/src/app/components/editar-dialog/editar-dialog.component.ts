import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from '../students/students.component';


@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css']
})
export class EditarDialogComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos
  ) {
    this.formulario = fb.group({
      name: new FormControl(data.name, [Validators.required]),
      lastname: new FormControl(data.lastname, [Validators.required]),
      age: new FormControl(data.age, [Validators.required, Validators.pattern('^[0-9]*$')]),
      email: new FormControl(data.email, [Validators.required, Validators.email]),
      phone: new FormControl(data.phone, [Validators.required, Validators.minLength(9), Validators.pattern('^[0-9]*$')])
    });
  }


  ngOnInit(): void {
  }

  actualizar() {
    this.dialogRef.close(this.formulario.value);
  }

  cerrar() {
    this.dialogRef.close();
  }

}
