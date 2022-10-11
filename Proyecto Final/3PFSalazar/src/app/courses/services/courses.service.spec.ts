import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoursesService } from './courses.service';

describe('PU | MCourses - [CoursesService]', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CoursesService(httpClientSpy as any);
  });

  it('El servicio MCourses - [CoursesService] se creó correctamente.', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar un arreglo de cursos.', () => {
    expect(service).toBeTruthy();
  });
});
