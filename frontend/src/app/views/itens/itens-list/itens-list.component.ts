import { Component, OnInit } from '@angular/core';
import { ItensService } from '../itens.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-itens-list',
  templateUrl: './itens-list.component.html',
  styleUrls: ['./itens-list.component.scss']
})
export class ItensListComponent implements OnInit {

  // Nome da entidade no plural
  itens: any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['numero_pecas', 'peso_total', 'observacoes', 'cliente', 'editar', 'deletar']

  // Injeção de dependência ou inversão de controle
  constructor(
    private itensSrv: ItensService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.itens = await this.itensSrv.listar()
    console.log(this.itens)
  }

  async deletar(id: string) {
    if (confirm('Deseja realmente deletar?')) {
      try {
        await this.itensSrv.deletar(id)
        this.ngOnInit()
        this.snackBar.open('Itens excluídos com sucesso.', '=D', {
          duration: 7000
        })
      }
      catch (erro) {
        this.snackBar.open('ERRO: não foi possível excluir estes itens.', '=(', {
          duration: 7000
        })
        console.log(erro)
      }
    }
  }

}