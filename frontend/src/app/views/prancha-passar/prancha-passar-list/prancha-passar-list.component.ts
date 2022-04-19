import { Component, OnInit } from '@angular/core';
import { PranchaPassarService } from '../prancha-passar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-prancha-passar-list',
  templateUrl: './prancha-passar-list.component.html',
  styleUrls: ['./prancha-passar-list.component.scss']
})
export class PranchaPassarListComponent implements OnInit {

  // Nome da entidade no plural
  pranchas_passar: any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['numero', 'marca', 'modelo', 'editar', 'excluir']

  // Injeção de dependência ou inversão de controle
  constructor(
    private pranchas_passarSrv: PranchaPassarService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.pranchas_passar = await this.pranchas_passarSrv.listar()
    console.log(this.pranchas_passar)
  }

  async deletar(id: string) {
    if (confirm('Deseja realmente excluir?')) {
      try {
        await this.pranchas_passarSrv.deletar(id)
        this.ngOnInit()
        this.snackBar.open('Item excluído com sucesso.', '=D', {
          duration: 7000
        })
      }
      catch (erro) {
        // 3) Dar feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este item.', '=(!', {
          duration: 7000
        })
        console.log(erro)
      }
    }
  }

}