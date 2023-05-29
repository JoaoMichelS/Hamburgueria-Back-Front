import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {
  cliente: Cliente = { _id: '', name: '', hamb_id: ''};
  createdCliente?: Cliente;

  constructor(private ClienteService: ClienteService, private router: Router) {}

  onSubmit(form: NgForm) {
    this.ClienteService.createCliente(this.cliente).subscribe({
      next: (h) => {
        this.createdCliente = h;
      },
      error: (error) => {
        if (error.status == 500) {
          console.log(error);
          this.router.navigate(['ohno', error.error.message])
        }
      }
    });
  }

}
