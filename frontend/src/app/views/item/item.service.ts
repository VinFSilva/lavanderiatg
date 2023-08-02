import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiServer: string = environment.apiServer
  private apiUrl: string = this.apiServer

  constructor(private http: HttpClient) { }

  listar() {
    return firstValueFrom(this.http.get(`${this.apiUrl}/item`));
  }

  deletar(id: any) {
    return firstValueFrom(this.http.delete(`${this.apiUrl}/item/${id}`));
  }

  salva(body: any) {
    return firstValueFrom(this.http.post(`${this.apiUrl}/item`, body));
  }

  listarUm(id: string) {
    return firstValueFrom(this.http.get(`${this.apiUrl}/item/${id}`));
  }

  update(body: any) {
    return firstValueFrom(this.http.put(`${this.apiUrl}/item/${body.id}`, body));
  }
}