import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NewDialogComponent } from './new-dialog.component';

describe('PU | MInscriptions - [NewDialogComponent]', () => {
  let component: NewDialogComponent;
  let fixture: ComponentFixture<NewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [ NewDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente MInscriptions - [NewDialogComponent] se creó correctamente.', () => {
    expect(component).toBeTruthy();
  });
});
