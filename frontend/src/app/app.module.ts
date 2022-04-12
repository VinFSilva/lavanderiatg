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
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
