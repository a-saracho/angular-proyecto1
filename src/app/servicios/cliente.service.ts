import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [
    { id: 1, nombre: 'Luisito', apellido: 'Luisitez', fecha_nacimiento: new Date('1980/10/15'), cp: 48001 },
    { id: 2, nombre: 'Paquito', apellido: 'Paquitez', fecha_nacimiento: new Date('1990/02/20'), cp: 48010 },
  ];

  private clientesUrl = 'http://localhost:3000/clientes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {
  }

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl);
  }
}
