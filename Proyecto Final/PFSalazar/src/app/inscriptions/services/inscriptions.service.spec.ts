import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { InscriptionsService } from './inscriptions.service';

describe('PU | MInscriptions - [InscriptionsService]', () => {
  let service: InscriptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(InscriptionsService);
  });

  it('El servicio MInscriptions - [InscriptionsService] se creó correctamente.', () => {
    expect(service).toBeTruthy();
  });
});
