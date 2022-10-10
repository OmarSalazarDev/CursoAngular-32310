import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StudentsModule } from '../students.module';
import { Student } from '../../models/student';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private api: string = environment.api;
  private subject!: BehaviorSubject<Student[]>;

  constructor(
    private http: HttpClient
  ) {
    this.subject = new BehaviorSubject<Student[]>([]);
  }

  getStudents(): Observable<Student[]> {
    this.readStudents();
    return this.subject.asObservable();
  }

  private readStudents() {
    this.http.get<Student[]>(`${this.api}/student`).subscribe((students) => {
      this.subject.next(students);
    });
  }

  newStudent(student: Student) {
    return this.http.post<Student>(`${this.api}/student`, student);
  }

  editStudent(student: Student) {
    this.http.put<Student>(`${this.api}/student/${student.id}`, student).subscribe((student) => {
      alert(`${student.id} - ${student.studentName} ${student.studentLastName} fue editado satisfactoriamente.`);
      this.readStudents();
    });
  }

  deleteStudent(id: string) {
    this.http.delete<Student>(`${this.api}/student/${id}`).subscribe((student) => {
      alert(`${student.id} - ${student.studentName} ${student.studentLastName} fue eliminado satisfactoriamente.`);
      this.readStudents();
    });
  }
}
