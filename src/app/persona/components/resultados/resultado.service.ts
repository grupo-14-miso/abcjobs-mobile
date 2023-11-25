import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Examen } from '../prueba/prueba';


@Injectable({
  providedIn: 'root'
})
export class ResultadoService {


  constructor(private http: HttpClient) { }
  public getPruebas(): Observable<Examen[]> {
    let apiUrl = environment.urlResultadosCandidato;
    apiUrl = apiUrl + sessionStorage.getItem("llave")+'?status=finished';
    console.log(apiUrl);
    return this.http.get<Examen[]>(apiUrl);
  }


}
