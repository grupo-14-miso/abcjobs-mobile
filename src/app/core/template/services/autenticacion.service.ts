import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private apiUrl = environment.urlLoginautenticacion;

  constructor(private http: HttpClient) { }

  public logonCandidato(user: credenciales): Observable<any> {

    return this.http.post(this.apiUrl,user);
  }

  public registerCandidato(user: registro): Observable<any> {

    return this.http.post(environment.urlRegistro ,user);
  }

  public registerEmpresa(user: registroempresa): Observable<any> {

    return this.http.post(environment.urlRegistro ,user);
  }


}


export interface usuario {
  id: string
  token: string
  expireAt: string
  role: string
  name: string
}


export interface credenciales {
  email: string
  password: string
  role: string
}

export interface registro {
  email: string
  password: string
  role: string
  Nombre: string
  apellido: string
}

export interface registroempresa {
  email:string,
  password: string,
  role:string,
  document_type:string,
  document_number:string,
  name:string,
  phone_number:string,
  country:string
}

