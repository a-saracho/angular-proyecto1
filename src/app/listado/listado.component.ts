import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  clientes = [
    { id: 1, nombre: 'Luisito', apellido: 'Luisitez', fecha_nacimiento: '15/10/1980', cp: '48001' },
    { id: 2, nombre: 'Paquito', apellido: 'Paquitez', fecha_nacimiento: '20/02/1990', cp: '48010' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
