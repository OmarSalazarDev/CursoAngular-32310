import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StudentsService } from './students.service';

describe('PU | MStudents - [StudentsService]', () => {
  let service: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(StudentsService);
  });

  it('El servicio MStudents - [StudentsService] se creó correctamente.', () => {
    expect(service).toBeTruthy();
  });
});
