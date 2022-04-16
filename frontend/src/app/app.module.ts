import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnderecoListComponent } from './endereco/endereco-list/endereco-list.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { ItensListComponent } from './itens/itens-list/itens-list.component';
import { MaquinaLavarListComponent } from './maquina-lavar/maquina-lavar-list/maquina-lavar-list.component';
import { PedidoListComponent } from './pedido/pedido-list/pedido-list.component';
import { PranchaPassarListComponent } from './prancha-passar/prancha-passar-list/prancha-passar-list.component';
import { SecadoraListComponent } from './secadora/secadora-list/secadora-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { EnderecoFormComponent } from './endereco/endereco-form/endereco-form.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { ItensFormComponent } from './itens/itens-form/itens-form.component';
import { MaquinaLavarFormComponent } from './maquina-lavar/maquina-lavar-form/maquina-lavar-form.component';
import { PranchaPassarFormComponent } from './prancha-passar/prancha-passar-form/prancha-passar-form.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { SecadoraFormComponent } from './secadora/secadora-form/secadora-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EnderecoListComponent,
    FuncionarioListComponent,
    ItensListComponent,
    MaquinaLavarListComponent,
    PedidoListComponent,
    PranchaPassarListComponent,
    SecadoraListComponent,
    UsersListComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ClienteFormComponent,
    ClienteListComponent,
    EnderecoFormComponent,
    FuncionarioFormComponent,
    ItensFormComponent,
    MaquinaLavarFormComponent,
    PranchaPassarFormComponent,
    PedidoFormComponent,
    SecadoraFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
