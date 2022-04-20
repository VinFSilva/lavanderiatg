import { Component, OnInit } from '@angular/core';
import { SecadoraService } from '../secadora.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-secadora-list',
  templateUrl: './secadora-list.component.html',
  styleUrls: ['./secadora-list.component.scss']
})
export class SecadoraListComponent implements OnInit {

  // Nome da entidade no plural
  secadoras: any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['numero', 'marca', 'modelo', 'editar', 'deletar']

  // Injeção de dependência ou inversão de controle
  constructor(
    private secadorasSrv: SecadoraService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.secadoras = await this.secadorasSrv.listar()
    console.log(this.secadoras)
  }

  async deletar(id: string) {
    if (confirm('Deseja realmente excluir?')) {
      try {
        await this.secadorasSrv.deletar(id)
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