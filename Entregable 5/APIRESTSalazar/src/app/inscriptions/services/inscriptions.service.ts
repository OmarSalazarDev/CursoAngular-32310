import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get<Inscription[]>(`${this.api}/inscription`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }

  newInscription(inscription: Inscription) {
    return this.http.post<Inscription>(`${this.api}/inscription`, inscription);
  }

  editInscription(inscription: Inscription) {
    return this.http.put<Inscription>(`${this.api}/inscription/${inscription.id}`, inscription);
  }

  deleteInscription(id: string) {
    return this.http.delete<Inscription>(`${this.api}/inscription/${id}`);
  }
}
