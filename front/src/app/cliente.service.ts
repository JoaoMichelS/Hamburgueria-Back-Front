import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
}) export class ClienteService {

  constructor(
    private http: HttpClient,
  ) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`http://localhost:3000/clientes`);
  }

  getCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`http://localhost:3000/cliente/${id}`);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:3000/cliente', cliente);
  }

  deleteCliente(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/cliente/${id}`);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`http://localhost:3000/cliente/${cliente._id}`, cliente);
  }
}
