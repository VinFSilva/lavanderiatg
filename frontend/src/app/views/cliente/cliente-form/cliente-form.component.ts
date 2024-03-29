import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  cliente: any = {}  // Objeto vazio, nome no SINGULAR

  title: string = 'Novo cliente'

  constructor(
    private clienteSrv: ClienteService,
    private snackBar: MatSnackBar,
    private location: Location,
    private actRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verifica se existe o parâmetro id na URL (rota)
    if (this.actRoute.snapshot.params['id']) {
      try {
        // 1) Acionar o back-end para buscar esse registro
        // e disponibilizá-lo para edição        
        this.cliente = await this.clienteSrv.listarUm(this.actRoute.snapshot.params['id'])

      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar dados para edição.',
          '=(', { duration: 7000 })
      }
    }
  }

  async salva(form: NgForm) {
    if (form.valid) {
      try {
        if (this.cliente.id) {
          await this.clienteSrv.update(this.cliente) // Atualização
        }
        else {
          await this.clienteSrv.salva(this.cliente)
          
        }
        // 2) Dar o feedback para o usuário
        this.snackBar.open('Dados salvos com sucesso.', '=D',
          { duration: 6000 })
        // 3) Voltar ao componente de listagem
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', '=(',
          { duration: 6000 })
      }

    }
  }

  voltar(form: NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if (form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }

    if (result) this.location.back()

  }

}