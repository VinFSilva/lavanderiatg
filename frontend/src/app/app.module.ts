import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

import { EnderecoListComponent } from './views/endereco/endereco-list/endereco-list.component';
import { EnderecoFormComponent } from './views/endereco/endereco-form/endereco-form.component';
import { FuncionarioListComponent } from './views/funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './views/funcionario/funcionario-form/funcionario-form.component';
import { ItensListComponent } from './views/itens/itens-list/itens-list.component';
import { ItensFormComponent } from './views/itens/itens-form/itens-form.component';
import { MaquinaLavarListComponent } from './views/maquina-lavar/maquina-lavar-list/maquina-lavar-list.component';
import { MaquinaLavarFormComponent } from './views/maquina-lavar/maquina-lavar-form/maquina-lavar-form.component';
import { PedidoListComponent } from './views/pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './views/pedido/pedido-form/pedido-form.component';
import { PranchaPassarListComponent } from './views/prancha-passar/prancha-passar-list/prancha-passar-list.component';
import { PranchaPassarFormComponent } from './views/prancha-passar/prancha-passar-form/prancha-passar-form.component';
import { SecadoraListComponent } from './views/secadora/secadora-list/secadora-list.component';
import { UsersListComponent } from './views/users/users-list/users-list.component';
import { SecadoraFormComponent } from './views/secadora/secadora-form/secadora-form.component';
import { MatListModule } from '@angular/material/list';
import { ClienteFormComponent } from './views/cliente/cliente-form/cliente-form.component';
import { ClienteListComponent } from './views/cliente/cliente-list/cliente-list.component';

import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatMomentDateModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
