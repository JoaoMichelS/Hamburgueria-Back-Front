import { Injectable } from '@angular/core';
import { Lanche } from './lanche';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
}) export class LancheService {

  constructor(
    private http: HttpClient,
  ) { }

  getLanches(): Observable<Lanche[]> {
    return this.http.get<Lanche[]>(`http://localhost:3000/hamburgueres`);
  }

  getLanche(id: string): Observable<Lanche> {
    return this.http.get<Lanche>(`http://localhost:3000/hamburguer/${id}`);
  }

  createLanche(lanche: Lanche): Observable<Lanche> {
    return this.http.post<Lanche>('http://localhost:3000/hamburguer', lanche);
  }

  deleteLanche(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/hamburguer/${id}`);
  }

  updateLanche(lanche: Lanche): Observable<Lanche> {
    return this.http.put<Lanche>(`http://localhost:3000/hamburguer/${lanche._id}`, lanche);
  }
}
