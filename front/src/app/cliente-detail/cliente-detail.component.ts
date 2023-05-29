import { Component, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent {
  cliente?: Cliente;
  updated: Boolean = false;
  notFound = false;
  notFoundMessage = '';

  constructor (
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.clienteService.getCliente(id)
      .subscribe(
        cliente => this.cliente = cliente,
        error => {
          if (error.status == 404 || error.status == 422) {
            this.notFound = true;
            this.notFoundMessage = error.error.message;
          }
        }
      );
  }

  goBack(): void {
    this.location.back();
  }

  updateCliente(): void {
    this.clienteService.updateCliente(this.cliente!)
      .subscribe((cliente) => {
        this.cliente = cliente;
        this.updated = true;
      });
  }
}
