import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  // Nome da entidade no plural
  items: any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['numero_pecas', 'peso_total', 'observacoes', 'cliente', 'editar', 'deletar']

  // Injeção de dependência ou inversão de controle
  constructor(
    private itemSrv: ItemService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.items = await this.itemSrv.listar()
    console.log(this.items)
  }

  async deletar(id: string) {
    if (confirm('Deseja realmente deletar?')) {
      try {
        await this.itemSrv.deletar(id)
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