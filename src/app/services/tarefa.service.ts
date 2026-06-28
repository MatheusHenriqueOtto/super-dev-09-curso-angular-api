import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaModel } from '../models/tarefa.model';
import { environment } from '../../environments/environment';
// Como gerar service: ng g s services\tarefa.service
// Service é resonsavel pela comunicação co api de tarefas
@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/trabalho/tarefas`;

  listar(): Observable<TarefaModel[]> {

    //Faze requisição para carregar a lista de tarefas
    return this.http.get<TarefaModel[]>(this.baseUrl);
  }
  cadastrar(tarefa: TarefaModel): Observable<TarefaModel> {

    //Faze requisição para carregar a lista de tarefas
    return this.http.post<TarefaModel>(this.baseUrl, tarefa);
  }

  apagar(id: string): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  obterPorId(id: string): Observable<TarefaModel>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<TarefaModel>(url)
  }

  editar(id: string, tarefa: TarefaModel): Observable<void>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<void>(url, tarefa);
  }
}
