import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ClienteListComponent } from './views/cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './views/cliente/cliente-form/cliente-form.component';
import { EnderecoListComponent } from './views/endereco/endereco-list/endereco-list.component';
import { EnderecoFormComponent } from './views/endereco/endereco-form/endereco-form.component';
import { FuncionarioListComponent } from './views/funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './views/funcionario/funcionario-form/funcionario-form.component';
import { ItensListComponent } from './views/itens/itens-list/itens-list.component';
import { ItensFormComponent } from './views/itens/itens-form/itens-form.component';
import { MaquinaLavarListComponent } from './views/maquina-lavar/maquina-lavar-list/maquina-lavar-list.component';
import { MaquinaLavarFormComponent } from './views/maquina-lavar/maquina-lavar-form/maquina-lavar-form.component';
import { PranchaPassarListComponent } from './views/prancha-passar/prancha-passar-list/prancha-passar-list.component';
import { PranchaPassarFormComponent } from './views/prancha-passar/prancha-passar-form/prancha-passar-form.component';
import { SecadoraListComponent } from './views/secadora/secadora-list/secadora-list.component';
import { SecadoraFormComponent } from './views/secadora/secadora-form/secadora-form.component';
import { PedidoListComponent } from './views/pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './views/pedido/pedido-form/pedido-form.component';
import { UsersListComponent } from './views/users/users-list/users-list.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';



const routes: Routes = [
  { path: 'cliente', component: ClienteListComponent },
  { path: 'cliente/novo', component: ClienteFormComponent },
  { path: 'cliente/:id', component: ClienteFormComponent },

  { path: 'endereco', component: EnderecoListComponent },
  { path: 'endereco/novo', component: EnderecoFormComponent },
  { path: 'endereco/:id', component: EnderecoFormComponent },

  { path: 'funcionario', component: FuncionarioListComponent },
  { path: 'funcionario/novo', component: FuncionarioFormComponent },
  { path: 'funcionario/:id', component: FuncionarioFormComponent },

  { path: 'itens', component: ItensListComponent },
  { path: 'itens/novo', component: ItensFormComponent },
  { path: 'itens/:id', component: ItensFormComponent },

  { path: 'maquina-lavar', component: MaquinaLavarListComponent },
  { path: 'maquina-lavar/novo', component: MaquinaLavarFormComponent },
  { path: 'maquina-lavar/:id', component: MaquinaLavarFormComponent },

  { path: 'prancha-passar', component: PranchaPassarListComponent },
  { path: 'prancha-passar/novo', component: PranchaPassarFormComponent },
  { path: 'prancha-passar/:id', component: PranchaPassarFormComponent },

  { path: 'secadora', component: SecadoraListComponent },
  { path: 'secadora/novo', component: SecadoraFormComponent },
  { path: 'secadora/:id', component: SecadoraFormComponent },

  { path: 'pedido', component: PedidoListComponent },
  { path: 'pedido/novo', component: PedidoFormComponent },
  { path: 'pedido/:id', component: PedidoFormComponent },

  { path: 'users', component: UsersListComponent },

  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule],
  providers: []


})
export class AppRoutingModule { }
