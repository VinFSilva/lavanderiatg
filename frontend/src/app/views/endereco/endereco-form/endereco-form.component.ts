import { MatSnackBar } from '@angular/material/snack-bar';
import { EnderecoService } from './../endereco.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/views/cliente/cliente.service';
import { Location } from '@angular/common';


@Component({
    selector: 'app-endereco-form',
    templateUrl: './endereco-form.component.html',
    styleUrls: ['./endereco-form.component.scss']
})
export class EnderecoFormComponent implements OnInit {


    //Variável para armazenar dados do registro
    endereco: any = {} //objeto vazio, nome no singular

    title: string = 'Novo endereco'

    //variaveis para armazenar as listagens de objetos relacionados
    clientes: any = [] //vetor vazio, nome no plural
    constructor(
        private enderecoSrv: EnderecoService,
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
                this.endereco = await this.enderecoSrv.listarUm(this.actRoute.snapshot.params['id'])
                //2) Mudar o título da página
                this.title = 'Editando endereco'
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
                //Se o endereco já existir(caso de edição), ele ja terá
                //o atributo id  
                if (this.endereco.id) {
                    await this.enderecoSrv.update(this.endereco) //atualização
                }
                else {
                    await this.enderecoSrv.salva(this.endereco)
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
