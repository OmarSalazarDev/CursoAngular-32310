import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('PU | MCore - [AuthService]', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('El servicio MCore - [AuthService] se creó correctamente.', () => {
    expect(service).toBeTruthy();
  });
});
