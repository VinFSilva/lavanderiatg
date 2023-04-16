import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from '../../cliente/cliente.service';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.scss']
})
export class EnderecoListComponent implements OnInit {

  // Nome da entidade no plural
  enderecos: any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['rua', 'numero', 'bairro', 'cidade', 'estado', 'cliente', 'editar', 'deletar']

  // Injeção de dependência ou inversão de controle
  constructor(
    private enderecoSrv: EnderecoService,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.enderecos = await this.enderecoSrv.listar()
    console.log(this.enderecos)
  }

  async deletar(id: string) {
    if (confirm('Deseja realmente deletar?')) {
      try {
        await this.enderecoSrv.deletar(id)
        this.ngOnInit()
        this.snackBar.open('Endereço excluído com sucesso.', '=D', {
          duration: 7000
        })
      }
      catch (erro) {
        this.snackBar.open('ERRO: não foi possível excluir este endereço.', '=(', {
          duration: 7000
        })
        console.log(erro)
      }
    }
  }

}