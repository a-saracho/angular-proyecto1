import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [
    { id: 1, nombre: 'Luisito', apellido: 'Luisitez', fecha_nacimiento: new Date('1980/10/15'), cp: 48001 },
    { id: 2, nombre: 'Paquito', apellido: 'Paquitez', fecha_nacimiento: new Date('1990/02/20'), cp: 48010 },
  ];

  obtenerClientes(): Observable<Cliente[]> {
    return of(this.clientes);
  }
}
