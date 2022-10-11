import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoursesService } from './courses.service';
import { of } from 'rxjs';

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

  it('Debe retornar un arreglo de cursos.', (done: DoneFn) => {
    const mockDatos = [
      {nameCourses: "ANGULAR", startDate: "2022-01-09T16:33:43.276Z", endDate: "2023-06-13T07:23:32.160Z", teacher: "Nestor", id: "1"},
      {nameCourses: "NODEJS", startDate: "2022-02-05T21:11:25.684Z", endDate: "2022-10-19T22:36:49.847Z", teacher: "Abner", id: "2"},
      {nameCourses: "BLACKHOLE", startDate: "2022-07-10T06:20:54.620Z", endDate: "2022-10-24T11:11:52.031Z", teacher: "Marlene", id: "5"},
      {nameCourses: "MEMORY", startDate: "2022-02-04T21:05:02.771Z", endDate: "2023-02-08T00:39:45.806Z", teacher: "August", id: "7"},
      {nameCourses: "VUE", startDate: "2022-10-07T05:00:00.000Z", endDate: "2022-10-31T05:00:00.000Z", teacher: "Catherine", id: "8"}
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerCursos().subscribe((users) => {
      expect(users).toEqual(mockDatos);
      done();
    })
  });
});
