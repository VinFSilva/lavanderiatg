import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private apiServer: string = environment.apiServer
  private apiUrl: string = this.apiServer

  constructor(private http: HttpClient) { }

  listar() {
    return firstValueFrom(this.http.get(`${this.apiUrl}/endereco`));
  }

  deletar(id: any) {
    return firstValueFrom(this.http.delete(`${this.apiUrl}/endereco/${id}`));
  }

  salva(body: any) {
    return firstValueFrom(this.http.post(`${this.apiUrl}/endereco`, body));
  }

  listarUm(id: string) {
    return firstValueFrom(this.http.get(`${this.apiUrl}/endereco/${id}`));
  }

  update(body: any) {
    return firstValueFrom(this.http.put(`${this.apiUrl}/endereco/${body.id}`, body));
  }
}