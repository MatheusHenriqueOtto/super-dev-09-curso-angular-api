import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EventoModel } from '../models/evento.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/trabalho/eventos`;

  listar(): Observable<EventoModel[]>{
    return this.http.get<EventoModel[]>(this.baseUrl);
  }

  cadastrar(evento: EventoModel): Observable<EventoModel>{
    return this.http.post<EventoModel>(this.baseUrl, evento);
  } 

  apagar(id: string): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  obterPorId(id: string): Observable<EventoModel>{
    return this.http.get<EventoModel>(this.baseUrl);
  }

  editar(id: string, evento: EventoModel): Observable<void>{
    return this.http.put<void>(`${this.baseUrl}/${id}`, evento);
  }
}
