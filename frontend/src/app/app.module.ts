import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatOptionModule } from '@angular/material/core';

import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

import { EnderecoListComponent } from './views/endereco/endereco-list/endereco-list.component';
import { EnderecoFormComponent } from './views/endereco/endereco-form/endereco-form.component';
import { ItemListComponent } from './views/item/item-list/item-list.component';
import { ItemFormComponent } from './views/item/item-form/item-form.component';
import { MaquinaLavarListComponent } from './views/maquina-lavar/maquina-lavar-list/maquina-lavar-list.component';
import { MaquinaLavarFormComponent } from './views/maquina-lavar/maquina-lavar-form/maquina-lavar-form.component';
import { PedidoListComponent } from './views/pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './views/pedido/pedido-form/pedido-form.component';
import { PranchaPassarListComponent } from './views/prancha-passar/prancha-passar-list/prancha-passar-list.component';
import { PranchaPassarFormComponent } from './views/prancha-passar/prancha-passar-form/prancha-passar-form.component';
import { SecadoraListComponent } from './views/secadora/secadora-list/secadora-list.component';
import { UserListComponent } from './views/user/user-list/user-list.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RegistroComponent } from './views/registro/registro.component';
import { LoginComponent } from './views/login/login.component';
import { ClienteService } from './views/cliente/cliente.service';
import { EnderecoService } from './views/endereco/endereco.service';
import { ItemService } from './views/item/item.service';
import { MaquinaLavarService } from './views/maquina-lavar/maquina-lavar.service';
import { PedidoService } from './views/pedido/pedido.service';
import { PranchaPassarService } from './views/prancha-passar/prancha-passar.service';
import { SecadoraService } from './views/secadora/secadora.service';
import { UserService } from './views/user/user.service';




@NgModule({
  declarations: [
    AppComponent,
    EnderecoListComponent,
    ItemListComponent,
    MaquinaLavarListComponent,
    PedidoListComponent,
    PranchaPassarListComponent,
    SecadoraListComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ClienteFormComponent,
    ClienteListComponent,
    EnderecoFormComponent,
    ItemFormComponent,
    MaquinaLavarFormComponent,
    PranchaPassarFormComponent,
    PedidoFormComponent,
    SecadoraFormComponent,
    RegistroComponent,
    LoginComponent,



  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    ClienteService,
    EnderecoService,
    ItemService,
    MaquinaLavarService,
    PedidoService,
    PranchaPassarService,
    SecadoraService,
    UserService
  ]

  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
