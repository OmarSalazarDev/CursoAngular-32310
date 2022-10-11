import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private api: string = environment.api;
  private subject!: BehaviorSubject<Course[]>;

  constructor(
    private http: HttpClient
  ) {
    this.subject = new BehaviorSubject<Course[]>([]);
  }

  getCourses(): Observable<Course[]> {
    this.readCourses();
    return this.subject.asObservable();
  }

  private readCourses() {
    this.http.get<Course[]>(`${this.api}/courses`).subscribe((courses) => {
      this.subject.next(courses);
    });
  }

  newCourse(course: Course) {
    return this.http.post<Course>(`${this.api}/courses`, course);
  }

  editCourse(course: Course) {
    this.http.put<Course>(`${this.api}/courses/${course.id}`, course).subscribe((course) => {
      alert(`${course.id} - ${course.nameCourses} fue editado satisfactoriamente.`);
      this.readCourses();
    });
  }

  deleteCourse(id: string) {
    this.http.delete<Course>(`${this.api}/courses/${id}`).subscribe((course) => {
      alert(`${course.id} - ${course.nameCourses} fue eliminado satisfactoriamente.`);
      this.readCourses();
    });
  }
}
