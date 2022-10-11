import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NewDialogComponent } from './new-dialog.component';

describe('PU | MStudents - [NewDialogComponent]', () => {
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

  it('El componente MStudents - [NewDialogComponent] se creó correctamente.', () => {
    expect(component).toBeTruthy();
  });
});
