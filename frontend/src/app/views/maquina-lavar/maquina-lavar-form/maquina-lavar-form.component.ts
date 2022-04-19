import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MaquinaLavarService } from '../maquina-lavar.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maquina-lavar-form',
  templateUrl: './maquina-lavar-form.component.html',
  styleUrls: ['./maquina-lavar-form.component.scss']
})
export class MaquinaLavarFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  maquina_lavar: any = {}  // Objeto vazio, nome no SINGULAR

  title: string = 'Novo maquina-lavar'

  constructor(
    private maquina_lavarSrv: MaquinaLavarService,
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
        this.maquina_lavar = await this.maquina_lavarSrv.listarUm(this.actRoute.snapshot.params['id'])

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
        // Se o maquina-lavar já existir (caso de edição), ele já terá
        // o atributo _id
        if (this.maquina_lavar.id) {
          await this.maquina_lavarSrv.update(this.maquina_lavar) // Atualização
        }
        else {
          await this.maquina_lavarSrv.salva(this.maquina_lavar)
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
