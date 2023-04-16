import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecadoraService {

  private apiServer: string = environment.apiServer
  private apiUrl: string = this.apiServer

  constructor(private http: HttpClient) { }

  listar() {
    return firstValueFrom(this.http.get(`${this.apiUrl}/secadora`));
  }

  deletar(id: any) {
    return firstValueFrom(this.http.delete(`${this.apiUrl}/secadora/${id}`));
  }

  salva(body: any) {
    return firstValueFrom(this.http.post(this.apiUrl, body));
  }

  listarUm(id: string) {
    return firstValueFrom(this.http.get(`${this.apiUrl}/secadora/${id}`));
  }

  update(body: any) {
    return firstValueFrom(this.http.put(this.apiUrl, body));
  }
}