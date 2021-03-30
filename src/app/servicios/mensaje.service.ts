import { Injectable } from '@angular/core';
import { Mensaje } from '../mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  mensajes: Mensaje[] = [];

  agregar(tipo: string, texto: string): void {
    this.mensajes.push({tipo, texto});
  }

  limpiar(): void {
    this.mensajes = [];
  }
}
