import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Examen } from '../prueba/prueba';


@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  private apiUrl = environment.urlResultados;
  constructor(private http: HttpClient) { }
  public getPruebas(): Observable<Examen[]> {
    console.log(this.apiUrl)
    return this.http.get<Examen[]>(this.apiUrl);
  }


}
