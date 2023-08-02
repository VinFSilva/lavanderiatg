import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PranchaPassarService } from '../prancha-passar.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prancha-passar-form',
  templateUrl: './prancha-passar-form.component.html',
  styleUrls: ['./prancha-passar-form.component.scss']
})
export class PranchaPassarFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  prancha_passar: any = {}  // Objeto vazio, nome no SINGULAR

  title: string = 'Novo prancha-passar'

  constructor(
    private prancha_passarSrv: PranchaPassarService,
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
        this.prancha_passar = await this.prancha_passarSrv.listarUm(this.actRoute.snapshot.params['id'])
        this.title = "Editando secadora"
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
        // 1) Salvar os dados no back-end
        // Se o prancha-passar já existir (caso de edição), ele já terá
        // o atributo id
        if (this.prancha_passar.id) {
          await this.prancha_passarSrv.update(this.prancha_passar) // Atualização
        }
        else {
          await this.prancha_passarSrv.salva(this.prancha_passar)
        }
        // 2) Dar o feedback para o usuário
        this.snackBar.open('Dados salvos com sucesso.', '=D',
          { duration: 5000 })
        // 3) Voltar ao componente de listagem
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', '=(',
          { duration: 7000 })
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