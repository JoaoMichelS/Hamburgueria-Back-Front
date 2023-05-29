import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes: Cliente[] = [];

  constructor (private clienteService: ClienteService) {}

  getClientes(): void {
    this.clienteService.getClientes()
        .subscribe(clientes => this.clientes = clientes);
  }

  ngOnInit(): void {
    this.getClientes();
  }

  deleteCliente(cliente: Cliente) {
    this.clienteService.deleteCliente(cliente._id).subscribe(() => this.getClientes());
  }

}
