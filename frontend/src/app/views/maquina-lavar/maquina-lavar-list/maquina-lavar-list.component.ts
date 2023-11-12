import { Component, OnInit } from '@angular/core';
import { MaquinaLavarService } from '../maquina-lavar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-maquina-lavar-list',
  templateUrl: './maquina-lavar-list.component.html',
  styleUrls: ['./maquina-lavar-list.component.scss']
})
export class MaquinaLavarListComponent implements OnInit {

  // Nome da entidade no plural
  maquinas_lavar: any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['id','marca', 'modelo', 'peso_maximo', 'editar', 'deletar']

  // Injeção de dependência ou inversão de controle
  constructor(
    private maquina_lavarSrv: MaquinaLavarService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.maquinas_lavar = await this.maquina_lavarSrv.listar()
    console.log(this.maquinas_lavar)
  }

  async deletar(id: string) {
    if (confirm('Deseja realmente excluir?')) {
      try {
        await this.maquina_lavarSrv.deletar(id)
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