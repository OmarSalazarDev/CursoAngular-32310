import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Inscription } from 'src/app/models/inscription';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {
  private api: string = environment.api;
  private subject!: BehaviorSubject<Inscription[]>;

  constructor(
    private http: HttpClient
  ) {
    this.subject = new BehaviorSubject<Inscription[]>([]);
  }

  getInscriptions(): Observable<Inscription[]> {
    this.readInscriptions();
    return this.subject.asObservable();
  }

  private readInscriptions() {
    this.http.get<Inscription[]>(`${this.api}/inscription`).subscribe((inscriptions) => {
      this.subject.next(inscriptions);
    });
  }

  newInscription(inscription: Inscription) {
    return this.http.post<Inscription>(`${this.api}/inscription`, inscription);
  }

  editInscription(inscription: Inscription) {
    this.http.put<Inscription>(`${this.api}/inscription/${inscription.id}`, inscription).subscribe((inscription) => {
      alert(`${inscription.id} - ${inscription.nameCourses} fue editado satisfactoriamente.`);
      this.readInscriptions();
    });
  }

  deleteInscription(id: string) {
    this.http.delete<Inscription>(`${this.api}/inscription/${id}`).subscribe((inscription) => {
      alert(`${inscription.id} - ${inscription.nameCourses} fue eliminado satisfactoriamente.`);
      this.readInscriptions();
    });
  }
}
