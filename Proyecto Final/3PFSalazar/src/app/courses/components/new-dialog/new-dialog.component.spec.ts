import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NewDialogComponent } from './new-dialog.component';
import { By } from '@angular/platform-browser';

describe('PU | MCourses - [NewDialogComponent]', () => {
  let component: NewDialogComponent;
  let fixture: ComponentFixture<NewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      declarations: [ NewDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente MCourses - [NewDialogComponent] se creó correctamente.', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene inválido cuando ingreso un solo campo', () => {
    const fb = component.fb;
    const nameCourses = fb.controls['nameCourses'];
    const startDate = fb.controls['startDate'];
    const endDate = fb.controls['endDate'];
    const teacher = fb.controls['teacher'];

    nameCourses.setValue('Angular');

    expect(fb.invalid).toBeTrue();
  });

  it('El formulario se cambia a válido cuando ingreso los campos requeridos', () => {
    const fb = component.fb;
    const nameCourses = fb.controls['nameCourses'];
    const startDate = fb.controls['startDate'];
    const endDate = fb.controls['endDate'];
    const teacher = fb.controls['teacher'];

    nameCourses.setValue('Angular');
    startDate.setValue('2022/10/01');
    endDate.setValue('2022/12/31');
    teacher.setValue('Pedro');

    expect(fb.invalid).toBeFalse();
  });

  // it('Se renderiza el objeto de cursos cuando doy click al botón del formulario', () => {
  //   const fb = component.fb;
  //   const nameCourses = fb.controls['nameCourses'];
  //   const startDate = fb.controls['startDate'];
  //   const endDate = fb.controls['endDate'];
  //   const teacher = fb.controls['teacher'];

  //   nameCourses.setValue('Angular');
  //   startDate.setValue('2022/10/01');
  //   endDate.setValue('2022/12/31');
  //   teacher.setValue('Pedro');

  //   const boton = fixture.debugElement.query(By.css('#btnCrear'));
  //   boton.nativeElement.click();
  //   fixture.detectChanges();

  //   const listCoursesRef = fixture.debugElement.query(By.css('#list-courses'));

  //   expect(listCoursesRef).toBeTruthy();
  // });
});
