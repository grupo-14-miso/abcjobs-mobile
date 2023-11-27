import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private apiUrl = environment.urlUpdateDatos;
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getOffers(company_id: string): Observable<Offer[]> {
    return this.http.get<Offer[]>(environment.urlEmpresaOfertas+company_id).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getCandidatosListos(oferta: number): Observable<candidatoListo[]> {
    return this.http.get<candidatoListo[]>(environment.urlCandidatosListos+oferta).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }


  saveMemberTeam(memberTeam: MemberTeam) {
    return this.http.post<Notification>(environment.urlCompanias+"/equipo", memberTeam).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }




}


export interface MemberTeam  {

    offer_id: string,
    candidate_id: string,
    tipo: string,
    rol: string,
    nombre: string,

}


export class Profile {
  names: string[];
  type: string;

  constructor(names: string[], type: string) {
    this.names = names;
    this.type = type;
  }
}

export interface actualizaExperiencia {
  id_candidato: string
  trabajos: Experiencum[]
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
  lenguajes_programacion?: string[]
  nacionalidad: string
  pais_nacimiento: string
  pais_residencia: string
  rol?: string[]
  segundo_apellido: string
  segundo_nombre: string
  tecnologias_herramientas?: string[]
  telefono: string
  tipo_documento: string
  soft_skill?: string[]
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


export class Company {
  company_id: number;
  country: string;
  created_date: string;
  document_number: string;
  document_type: string;
  email: string;
  last_modified: string;
  name: string;
  phone_number: string;

  constructor(
    company_id: number,
    country: string,
    created_date: string,
    document_number: string,
    document_type: string,
    email: string,
    last_modified: string,
    name: string,
    phone_number: string
  ) {
    this.company_id = company_id;
    this.country = country;
    this.created_date = created_date;
    this.document_number = document_number;
    this.document_type = document_type;
    this.email = email;
    this.last_modified = last_modified;
    this.name = name;
    this.phone_number = phone_number;
  }
}

export class Offer {
  company_id: string;
  created_date: string;
  description: string;
  end_date: string;
  last_modified: string;
  name: string;
  offer_id: number;
  start_date: string;

  constructor(
    company_id: string,
    created_date: string,
    description: string,
    end_date: string,
    last_modified: string,
    name: string,
    offer_id: number,
    start_date: string
  ) {
    this.company_id = company_id;
    this.created_date = created_date;
    this.description = description;
    this.end_date = end_date;
    this.last_modified = last_modified;
    this.name = name;
    this.offer_id = offer_id;
    this.start_date = start_date;
  }
}

export interface candidatoListo {
  id: string
  id_candidato: string
  name: string
}

