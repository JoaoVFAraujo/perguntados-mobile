import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerguntasModel } from 'src/app/model/perguntas.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:8080/perguntas';

  constructor(private http: HttpClient) { }

  getAllPerguntas(): Observable<PerguntasModel[]> {
    return this.http.get<PerguntasModel[]>(`${this.apiUrl}`);
  }

  getPerguntaByCategoriaRandom(categoriaId: number): Observable<PerguntasModel> {
    return this.http.get<PerguntasModel>(`${this.apiUrl}/categoria/${categoriaId}/aleatoria`);
  }

  getPerguntaByCategoriaRandomWithOutIds(categoriaId: number, arrayIds: { ids: number[] }): Observable<PerguntasModel> {
    return this.http.post<PerguntasModel>(`${this.apiUrl}/categoria/${categoriaId}/aleatoria`, arrayIds);
  }

}
