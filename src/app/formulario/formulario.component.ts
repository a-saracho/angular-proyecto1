import { Cliente } from './../cliente';
import { ClienteService } from './../servicios/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const CLIENTE_VACIO = {id : 0, nombre : '', apellido: '', fecha_nacimiento : new Date(), cp : 0};

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  cliente: Cliente = CLIENTE_VACIO;
  id = 0;

  constructor(private router: ActivatedRoute, private route: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.id = +this.router.snapshot.paramMap.get('id');

    if (this.id)
    {
      this.clienteService.getCliente(this.id).subscribe(
        cliente => this.cliente = cliente
      );
    }
    else
    {
      this.cliente = CLIENTE_VACIO;
    }
  }

  aceptar(): void {
    console.log(this.cliente);

    if (this.id) {
      this.clienteService.modificarCliente(this.cliente).subscribe(
        () => this.volverAListado()
      );
    } else {
      this.clienteService.insertarCliente(this.cliente).subscribe(
        this.volverAListado.bind(this)
      );
    }
  }

  volverAListado(): void {
    // TODO: implementar navegación https://angular.io/guide/router#specifying-a-relative-route
    this.route.navigate(['listado']);
  }

}
