import { Client } from './client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = "http://localhost:8080/api/v1/clients";

  constructor(private httpClient: HttpClient) { }

  getClientsList(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseUrl}`);
  }

  createClient(client: Client): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, client);  
  }

  getClientById(id: number): Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseUrl}/${id}`);
  }

  updateClient(id: number, client: Client): Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, client);
  }

  deleteClient(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
