import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecadoraService {

  private apiServer: string = environment.apiServer
  private apiUri: string = this.apiServer + 'secadora'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.apiUri).toPromise()
  }

  deletar(id: string) {
    // o metodo delete() nativo do HTTPClient não suporta a passagem de um body para o back-end
    //return this.http.delete(this.apiServer + 'pedido/' + id)toString.Pomise()

    //O método request pode ser usado com qualquer verbo e aceita a passagem de body
    return this.http.request('DELETE', this.apiUri, { body: { id: id } }).toPromise()
  }

  salva(body: any) {
    return this.http.post(this.apiUri, body).toPromise()
  }

  listarUm(id: string) {
    return this.http.get(this.apiUri + '/' + id).toPromise()
  }

  update(body: any) {
    return this.http.put(this.apiUri, body).toPromise()
  }
}