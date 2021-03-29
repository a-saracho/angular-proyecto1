import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../servicios/cliente.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.obtenerClientes().subscribe(
      (clientes: Cliente[]) => this.clientes = clientes
    );
  }

  private cargarListado(): void {
    this.clienteService.obtenerClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  private delete(cliente: Cliente): void {
    if (confirm('¿Estás seguro de querer borrar el cliente con Id ' + cliente.id + '?')) {
      this.clienteService.deleteCliente(cliente.id).subscribe(
        // this.cargarListado.bind(this)
        _ => this.cargarListado()
      );
    }
  }

}
