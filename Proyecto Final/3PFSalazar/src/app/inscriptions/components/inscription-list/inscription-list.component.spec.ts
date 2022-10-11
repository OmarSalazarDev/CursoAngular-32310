import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { InscriptionListComponent } from './inscription-list.component';

describe('PU | MInscriptions - [InscriptionListComponent]', () => {
  let component: InscriptionListComponent;
  let fixture: ComponentFixture<InscriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        MatDialogModule
      ],
      declarations: [ InscriptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente MInscriptions - [InscriptionListComponent] se creó correctamente.', () => {
    expect(component).toBeTruthy();
  });
});
