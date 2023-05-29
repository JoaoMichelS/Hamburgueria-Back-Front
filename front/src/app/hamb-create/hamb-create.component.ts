import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LancheService } from '../lanche.service';
import { Lanche } from '../lanche';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamb-create',
  templateUrl: './hamb-create.component.html',
  styleUrls: ['./hamb-create.component.css']
})
export class HambCreateComponent {
  lanche: Lanche = { _id: '', name: '', ingredientes: '', preco: 0, estoque: 0};
  createdLanche?: Lanche;

  constructor(private LancheService: LancheService, private router: Router) {}

  onSubmit(form: NgForm) {
    this.LancheService.createLanche(this.lanche).subscribe({
      next: (h) => {
        this.createdLanche = h;
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
