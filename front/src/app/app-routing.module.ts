import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OhNoComponent } from './oh-no/oh-no.component';

import { HambCreateComponent } from './hamb-create/hamb-create.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'detail/:id', component: ClienteDetailComponent },
  { path: 'createLanche', component: HambCreateComponent},
  { path: 'createCliente', component: ClienteCreateComponent},
  { path: 'ohno/:message', component: OhNoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
