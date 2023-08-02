import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ClienteListComponent } from './views/cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './views/cliente/cliente-form/cliente-form.component';
import { EnderecoListComponent } from './views/endereco/endereco-list/endereco-list.component';
import { EnderecoFormComponent } from './views/endereco/endereco-form/endereco-form.component';
import { MaquinaLavarListComponent } from './views/maquina-lavar/maquina-lavar-list/maquina-lavar-list.component';
import { MaquinaLavarFormComponent } from './views/maquina-lavar/maquina-lavar-form/maquina-lavar-form.component';
import { PranchaPassarListComponent } from './views/prancha-passar/prancha-passar-list/prancha-passar-list.component';
import { PranchaPassarFormComponent } from './views/prancha-passar/prancha-passar-form/prancha-passar-form.component';
import { SecadoraListComponent } from './views/secadora/secadora-list/secadora-list.component';
import { SecadoraFormComponent } from './views/secadora/secadora-form/secadora-form.component';
import { PedidoListComponent } from './views/pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './views/pedido/pedido-form/pedido-form.component';
import { UserListComponent } from './views/user/user-list/user-list.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';



const routes: Routes = [
  { path: 'cliente', component: ClienteListComponent },
  { path: 'cliente/novo', component: ClienteFormComponent },
  { path: 'cliente/:id', component: ClienteFormComponent },

  { path: 'endereco', component: EnderecoListComponent },
  { path: 'endereco/novo', component: EnderecoFormComponent },
  { path: 'endereco/:id', component: EnderecoFormComponent },

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

  { path: 'user', component: UserListComponent },

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
