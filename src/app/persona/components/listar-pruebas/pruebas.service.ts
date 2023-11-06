import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Examen } from '../prueba/prueba';
import { Respuesta } from '../prueba/prueba';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {
  private apiUrl = environment.urlPruebas;
  private apiGuardarPregunta = environment.urlGuardarPregunta;
  private apiResultados = environment.urlResultados;
  private apiFinalizar = environment.urlFinalizarprueba;

  constructor(private http: HttpClient) { }

  public getPruebas(): Observable<Examen[]> {
    console.log(this.apiUrl)
    return this.http.get<Examen[]>(this.apiUrl);
  }

  public guardarPregunta(codExamen:Number,rta: Respuesta) {
    console.log("gaurdando Pregunta -- URL  "+ this.apiGuardarPregunta + codExamen)
    console.log( JSON.stringify(rta) )
    return this.http.post(
      this.apiGuardarPregunta + codExamen,rta
    )
  }

  public finalizarPrueba(codExamen:Number) {
    console.log(this.apiFinalizar)
    console.log(this.apiFinalizar + codExamen)
    return this.http.post(
      this.apiFinalizar + codExamen,{}
    )
  }

  public verResutados(codExamen:Number) {
    console.log(this.apiResultados)
    return this.http.post(
      this.apiResultados + codExamen,{}
    )
  }

}
