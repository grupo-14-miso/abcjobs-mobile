import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private apiUrl = environment.urlUpdateDatos;
  constructor(private http: HttpClient) { }

  public putDatos(micandidato: Candidate): Observable<any> {
    console.log(this.apiUrl)
    return this.http.put(this.apiUrl, micandidato);
  }

  public getDatos(keycandidato: string): Observable<Candidate> {
    console.log(environment.urlUsuarios + "/" + keycandidato)
    return this.http.get<Candidate>(environment.urlUsuarios + "/" + keycandidato);
  }

  public putDatosLaborales(micandidato: Candidate): Observable<any> {
    console.log(environment.urlUpdateDatosLaborales)
    return this.http.put(this.apiUrl, micandidato);
  }
}



export interface Candidate {
  Nombre: string
  apellido: string
  ciudad_nacimiento: string
  ciudad_residencia: string
  documento: string
  educacion: Educacion[]
  email: string
  estado_civil: string
  experiencia: Experiencum[]
  fecha_nacimiento: string
  genero: string
  id_candidato: string
  idiomas: Idioma[]
  key: Key
  lenguajes_programacion: string[]
  nacionalidad: string
  pais_nacimiento: string
  pais_residencia: string
  rol: string[]
  segundo_apellido: string
  segundo_nombre: string
  tecnologias_herramientas: string[]
  telefono: string
  tipo_documento: string
}

export interface Educacion {
  fecha_fin: string
  fecha_inicio: string
  institucion: string
  nivel_academico: string
  pais: string
  titulo_obtenido: string
}

export interface Experiencum {
  cargo: string
  ciudad: string
  empresa: string
  fecha_fin: string
  fecha_inicio: string
  pais: string
  rol: string
}

export interface Idioma {
  fecha_certificacion: string
  idioma: string
  nativo: string
  nivel_conversacion: number
  nivel_escritura: number
  nivel_lectura: number
}

export interface Key {
  id: number
  kind: string
}
