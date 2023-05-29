import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OhNoComponent } from './oh-no/oh-no.component';
import { HambCreateComponent } from './hamb-create/hamb-create.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OhNoComponent,
    HambCreateComponent,
    ClienteCreateComponent,
    ClientesComponent,
    ClienteDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
