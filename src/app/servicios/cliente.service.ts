import { MensajeService } from 'src/app/servicios/mensaje.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  private clientesUrl = 'http://localhost:3000/clientes/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient, private mensajeService: MensajeService ) {
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl).pipe(
      tap(() => this.mensajeService.agregar('success', 'Se han obtenido todos los registros')),
      catchError( (err, caught) => {
        this.mensajeService.agregar('error', 'Ha habido un problema al obtener los registros');
        this.mensajeService.agregar('error', err.message);
        console.error(err, caught);
        return [];
      })
    );
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.clientesUrl + id).pipe(
      tap(() => this.mensajeService.agregar('success', 'Se han obtenido el registro con id ' + id)),
      catchError( (err, caught) => {
        this.mensajeService.agregar('error', 'Ha habido un problema al obtener el registro con id ' + id);
        this.mensajeService.agregar('error', err.message);
        console.error(err, caught);
        return [];
      })
    );
  }

  insertarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.clientesUrl, cliente).pipe(
      tap(() => this.mensajeService.agregar('success', 'Se ha creado el registro')),
      catchError( (err, caught) => {
        this.mensajeService.agregar('error', 'Ha habido un problema al crear el registro');
        this.mensajeService.agregar('error', err.message);
        console.error(err, caught);
        return [];
      })
    );
  }

  modificarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.clientesUrl + cliente.id, cliente).pipe(
      tap(() => this.mensajeService.agregar('success', 'Se ha modificado el registro con id ' + cliente.id)),
      catchError( (err, caught) => {
        this.mensajeService.agregar('error', 'Ha habido un problema al modificar el registro con id ' + cliente.id);
        this.mensajeService.agregar('error', err.message);
        console.error(err, caught);
        return [];
      })
    );
  }

  deleteCliente(cliente: number | Cliente): Observable<Cliente> {
    const id = typeof cliente === 'number' ? cliente : cliente.id;
    const url = `${this.clientesUrl}/${id}`;

    return this.http.delete<Cliente>(url, this.httpOptions).pipe(
      tap(() => this.mensajeService.agregar('success', 'Se ha eliminado el registro con id ' + id)),
      catchError( (err, caught) => {
        this.mensajeService.agregar('error', 'Ha habido un problema al eliminar el registro con id ' + id);
        this.mensajeService.agregar('error', err.message);
        console.error(err, caught);
        return [];
      })
    );
  }
}
