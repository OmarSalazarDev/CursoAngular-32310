import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { StudentListComponent } from './student-list.component';

describe('PU | MStudents - [StudentListComponent]', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule
      ],
      declarations: [ StudentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente MStudents - [StudentListComponent] se creó correctamente.', () => {
    expect(component).toBeTruthy();
  });
});
