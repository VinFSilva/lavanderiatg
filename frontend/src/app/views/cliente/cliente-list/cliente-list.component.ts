import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  // Nome da entidade no plural
  clientes: any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome', 'cpf', 'rg', 'data_nascimento', 'telefone', 'email', 'editar', 'deletar']

  // Injeção de dependência ou inversão de controle
  constructor(
    private clienteSrv: ClienteService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.clientes = await this.clienteSrv.listar()
    console.log(this.clientes)
  }

  async deletar(id: string) {
    if (confirm('Deseja realmente deletar?')) {
      try {
        await this.clienteSrv.deletar(id)
        this.ngOnInit()
        this.snackBar.open('Cliente excluído com sucesso.', '=D', {
          duration: 7000
        })
      }
      catch (erro) {
        this.snackBar.open('ERRO: não foi possível excluir este cliente.', '=(', {
          duration: 7000
        })
        console.log(erro)
      }
    }
  }

}
