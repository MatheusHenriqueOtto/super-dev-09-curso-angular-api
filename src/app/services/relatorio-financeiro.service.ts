import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RelatorioFinanceiroModel } from '../models/relatorio-finaceiro.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RelatorioFinanceiroService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/trabalho/relatorios-financeiros`;
  
  listar(): Observable<RelatorioFinanceiroModel[]> {
    return this.http.get<RelatorioFinanceiroModel[]>(this.baseUrl);
  }

  cadastrar(relatorioFinanceiro: RelatorioFinanceiroModel): Observable<RelatorioFinanceiroModel> {
    return this.http.post<RelatorioFinanceiroModel>(this.baseUrl, relatorioFinanceiro);
  }

  apagar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  obterPorId(id: number): Observable<RelatorioFinanceiroModel>{
    return this.http.get<RelatorioFinanceiroModel>(`${this.baseUrl}/${id}`);
  }
  
  
}
