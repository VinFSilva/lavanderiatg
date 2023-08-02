import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiServer: string = environment.apiServer
  private apiUrl: string = this.apiServer

  constructor(private http: HttpClient) { }

  listar() {
    return firstValueFrom(this.http.get(`${this.apiUrl}/cliente`));
  }

  deletar(id: string) {
    return firstValueFrom(this.http.delete(`${this.apiUrl}/cliente/${id}`))
  }

  salva(body: any) {
    return firstValueFrom(this.http.post(`${this.apiUrl}/cliente`, body));
  }

  listarUm(id: string) {
    return firstValueFrom(this.http.get(`${this.apiUrl}/cliente/${id}`));
  }

  update(body: any) {
    return firstValueFrom(this.http.put(`${this.apiUrl}/cliente/${body.id}`, body));
  }
}
