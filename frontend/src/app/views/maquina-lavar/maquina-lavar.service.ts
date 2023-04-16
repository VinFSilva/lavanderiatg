import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaquinaLavarService {

  private apiServer: string = environment.apiServer
  private apiUrl: string = this.apiServer

  constructor(private http: HttpClient) { }

  listar() {
    return firstValueFrom(this.http.get(`${this.apiUrl}/maquina_lavar`));
  }

  deletar(id: any) {
    return firstValueFrom(this.http.delete(`${this.apiUrl}/maquina_lavar/${id}`));
  }

  salva(body: any) {
    return firstValueFrom(this.http.post(this.apiUrl, body));
  }

  listarUm(id: string) {
    return firstValueFrom(this.http.get(`${this.apiUrl}/maquina_lavar/${id}`));
  }

  update(body: any) {
    return firstValueFrom(this.http.put(this.apiUrl, body));
  }  
}