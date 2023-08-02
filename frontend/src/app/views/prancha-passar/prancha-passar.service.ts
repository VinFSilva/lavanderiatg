import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PranchaPassarService {

  private apiServer: string = environment.apiServer
  private apiUrl: string = this.apiServer

  constructor(private http: HttpClient) { }

  listar() {
    return firstValueFrom(this.http.get(`${this.apiUrl}/prancha_passar`));
  }

  deletar(id: any) {
    return firstValueFrom(this.http.delete(`${this.apiUrl}/prancha_passar/${id}`));
  }

  salva(body: any) {
    return firstValueFrom(this.http.post(`${this.apiUrl}/prancha_passar`, body));
  }

  listarUm(id: string) {
    return firstValueFrom(this.http.get(`${this.apiUrl}/prancha_passar/${id}`));
  }

  update(body: any) {
    return firstValueFrom(this.http.put(`${this.apiUrl}/prancha_passar/${body.id}`, body));
  }  
}