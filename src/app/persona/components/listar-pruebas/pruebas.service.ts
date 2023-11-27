import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Examen } from '../prueba/prueba';
import { Respuesta } from '../prueba/prueba';
import { Entrevista } from 'src/app/internoabc/model/preentrevista';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {
  private apiUrlpruebas = environment.urlPruebas;
  private apiGuardarPregunta = environment.urlGuardarPregunta;
  private apiResultados = environment.urlResultados;
  private apiFinalizar = environment.urlFinalizarprueba;

  constructor(private http: HttpClient) { }

  public getPruebas(candidato:string): Observable<Examen[]> {
    console.log("lamando el servicio getPruebas",this.apiUrlpruebas+"candidate/"+candidato+"?status=in_progress&status=to_do&inclusive=true")
    return this.http.get<Examen[]>(this.apiUrlpruebas+"candidate/"+candidato+"?status=in_progress&status=to_do&inclusive=true");
  }

  public getPruebasDesempenoCandidato(candidato:string): Observable<Examen[]> {
    console.log("lamando el servicio getPruebas",this.apiUrlpruebas+"candidate/"+candidato+"?status=in_progress&status=to_do&inclusive=true")
    return this.http.get<Examen[]>(this.apiUrlpruebas+"candidate/"+candidato+"?status=in_progress&status=to_do&inclusive=true");
  }

  public getPruebasDesempenoEmpresa(empresa:string): Observable<Examen[]> {
    console.log("lamando el servicio getPruebas",this.apiUrlpruebas+"company/"+empresa)
    return this.http.get<Examen[]>(this.apiUrlpruebas+"company/"+empresa);
  }



  public getPruebasxTipo(tipo:string): Observable<Examen[]> {
    console.log("lamando el servicio getPruebasxTipo",this.apiUrlpruebas+"assignments?type="+tipo)
    return this.http.get<Examen[]>(environment.baseUrl+"?type="+tipo);
  }


  public postAsignarPruebaaCandidato(examen:number,candidato:number) {
    console.log("lamando el servicio postAsignarPruebaaCandidato",this.apiUrlpruebas+"candidate/"+examen+"/"+candidato)
    return this.http.post(this.apiUrlpruebas+"candidate/"+examen+"/"+candidato,{});
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
