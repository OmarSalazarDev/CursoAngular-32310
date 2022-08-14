import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

export interface Alumnos {
  name: string;
  lastname: string;
  age: number;
  email: string;
  phone: string;
}

const ELEMENT_DATA: Alumnos[]  = [
  {name: 'Juan', lastname: 'Perez Lopez', age: 20, email: 'juan@gmail.com', phone: '999999999'},
  {name: 'Pedro', lastname: 'Salazar Cuadros', age: 32, email: 'pedro@gmail.com', phone: '912096599'},
  {name: 'Maria', lastname: 'Salcedo Corrales ', age: 25, email: 'maria@gmail.com', phone: '993296599'},
  {name: 'Juana', lastname: 'Obregon Alvino', age: 20, email: 'juana@gmail.com', phone: '993296599'},
  {name: 'Jorge', lastname: 'Gonzalez', age: 20, email: 'jorge@hotmail.com', phone: '993289119'}
]

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {

  formularioAlumnos: FormGroup;

  columnas: string[] = ['name', 'lastname', 'age', 'email', 'phone', 'actions'];
  dataSource: MatTableDataSource<Alumnos> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<Alumnos>;
  ngOnInit(): void {
  }

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.formularioAlumnos = fb.group({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern('^[0-9]*$')])
    });
  }

  addAlumno() {

  }

  eliminarAlumnos(elemento: Alumnos) {
    this.dataSource.data = this.dataSource.data.filter((alumnos: Alumnos )=> alumnos.email != elemento.email);
  }

  editarAlumnos(elemento: Alumnos) {
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '350px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const item = this.dataSource.data.find(Alumnos => Alumnos.email === result.email);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = result;
        this.tabla.renderRows();
      }
    })
  }

}
