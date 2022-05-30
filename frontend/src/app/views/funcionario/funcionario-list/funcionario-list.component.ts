import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements OnInit {

  // Nome da entidade no plural
  funcionarios: any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'rg', 'data_nascimento', 'telefone', 'email', 'cargo', 'salario', 'editar', 'deletar']

  // Injeção de dependência ou inversão de controle
  constructor(
    private funcionarioSrv: FuncionarioService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.funcionarios = await this.funcionarioSrv.listar()
    console.log(this.funcionarios)
  }

  async deletar(id: string) {
    if (confirm('Deseja realmente deletar?')) {
      try {
        await this.funcionarioSrv.deletar(id)
        this.ngOnInit()
        this.snackBar.open('Funcionário excluído com sucesso.', '=D', {
          duration: 7000
        })
      }
      catch (erro) {
        this.snackBar.open('ERRO: não foi possível excluir este funcionário.', '=(', {
          duration: 7000
        })
        console.log(erro)
      }
    }
  }

}