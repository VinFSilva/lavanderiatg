import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemService } from '../item.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/views/cliente/cliente.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {


  //Variável para armazenar dados do registro
  item: any = {} //objeto vazio, nome no singular

  title: string = 'Novo items'

  //variaveis para armazenar as listagens de objetos relacionados
  clientes: any = [] //vetor vazio, nome no plural
  constructor(
    private itemSrv: ItemService,
    //services das entidades relacionadas
    private clienteSrv: ClienteService,
    private snackBar: MatSnackBar,
    private location: Location,
    private actRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    //Verifica se existe o parâmetro id na URL (rota)
    if (this.actRoute.snapshot.params['id']) {
      try {
        //1) Acionar o backend para buscar esse registro
        //e disponibilizá-lo para edição
        this.item = await this.itemSrv.listarUm(this.actRoute.snapshot.params['id'])
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: Não foi possível carregar os dados para edição.',
          '=(', { duration: 7000 })
      }
    }
    // carrega as listagens dos dados relacionados
    this.carregarDados()
  }

  async carregarDados() {
    try {
      this.clientes = await this.clienteSrv.listar()
    }
    catch (erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível carregar os dados necessários para a página.', '=(', { duration: 7000 })
    }
  }

  async salva(form: NgForm) {
    if (form.valid) {
      try {
        //1)Salvar os dados no back-end  
        //Se o itens já existir(caso de edição), ele ja terá
        //o atributo id  
        if (this.item.id) {
          await this.itemSrv.update(this.item) //atualização
        }
        else {
          await this.itemSrv.salva(this.item)
        }
        this.snackBar.open('Dados salvos com sucesso', '=D',
          { duration: 7000 })
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados', '=(',
          { duration: 7000 })
      }

    }
  }

  voltar(form: NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if (form.dirty && form.touched) {
      result = confirm('Dados não salvos. Deseja realmente voltar?')
    }

    if (result) this.location.back()
  }
}