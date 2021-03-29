import { Cliente } from './../cliente';
import { ClienteService } from './../servicios/cliente.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  cliente: Cliente = {id : 0, nombre : '', apellido: '', fecha_nacimiento : new Date(), cp : 0};

  constructor(private router: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit(): void {
    const id = +this.router.snapshot.paramMap.get('id');

    if (id)
    {
      this.clienteService.getCliente(id).subscribe(
        cliente => this.cliente = cliente
      );
    }
  }

}
