import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  
  private readonly baseUrl = `${environment.apiUrl}//api/v1/trabalho/projetos`

}
