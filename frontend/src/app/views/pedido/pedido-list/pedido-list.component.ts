import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {

  // Nome da entidade no plural
  pedidos: any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['id', 'numero', 'data_coleta', 'data_entrega', 'finalizado', 'cliente', 'itens', 'maquina_lavar', 'secadora', 'prancha_passar',
    'editar', 'deletar'];

  // Injeção de dependência ou inversão de controle
  constructor(
    private pedidoSrv: PedidoService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.pedidos = await this.pedidoSrv.listar()
    console.log(this.pedidos)
  }

  async deletar(id: string) {
    if (confirm('Deseja realmente deletar?')) {
      try {
        await this.pedidoSrv.deletar(id)
        this.ngOnInit()
        this.snackBar.open('Pedido excluído com sucesso.', '=D', {
          duration: 7000
        })
      }
      catch (erro) {
        this.snackBar.open('ERRO: não foi possível excluir este pedido.', '=(', {
          duration: 7000
        })
        console.log(erro)
      }
    }
  }

}