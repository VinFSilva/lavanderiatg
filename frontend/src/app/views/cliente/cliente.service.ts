import { HttpClient } from '@angular/common/http';
//import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente.model';
const baseUrl = 'http://localhost:3000/cliente'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //private apiServer: string = environment.apiServer
  //private apiUrl: string = this.apiServer

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(baseUrl);
  }

  deletar(id: string) {
    // o metodo delete() nativo do HTTPClient não suporta a passagem de um body para o back-end
    //return this.http.delete(this.apiServer + 'pedido/' + id)toString.Pomise()

    //O método request pode ser usado com qualquer verbo e aceita a passagem de body
    //return this.http.request('DELETE', this.apiUrl, { body: { id: id } });
  }

  salva(body: any) {
    //return this.http.post(this.apiUrl, body);
  }

  listarUm(id: any): Observable<Cliente> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  update(body: any) {
    // return this.http.put(this.apiUrl, body);
  }
}