import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiServer: string = environment.apiServer
  private apiUrl: string = this.apiServer

  constructor(private http: HttpClient) { }

  listar() {
    return firstValueFrom(this.http.get(`${this.apiUrl}/pedido`));
  }

  deletar(id: string) {
    // o metodo delete() nativo do HTTPClient não suporta a passagem de um body para o back-end
    //return this.http.delete(this.apiServer + 'pedido/' + id)toString.Pomise()

    //O método request pode ser usado com qualquer verbo e aceita a passagem de body
    //return this.http.request('DELETE', this.apiUrl, { body: { id: id } }).toPromise()
    return firstValueFrom(this.http.delete(`${this.apiUrl}/pedido/${id}`));
  }

  salva(body: any) {
    return firstValueFrom(this.http.post(this.apiUrl, body));
  }

  listarUm(id: string) {
    return firstValueFrom(this.http.get(`${this.apiUrl}/pedido/${id}`));
  }

  update(body: any) {
    return firstValueFrom(this.http.put(this.apiUrl, body));
  }
}