import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import  {Company, Oferta, PreEntrevista,Entrevista} from './preentrevista';

@Injectable({
  providedIn: 'root'
})
export class PreentrevistaService {
  private apiUrl = "";

  constructor(private http: HttpClient) { }

  public getEntrevistas(): Observable<Entrevista[]> {
    console.log(this.apiUrl)

    this.apiUrl = environment.urlEntrevistas ;
    return this.http.get<Entrevista[]>(this.apiUrl);
  }


  public getPreEntrevistas(oferta:string): Observable<PreEntrevista[]> {


    this.apiUrl = environment.urlPreentrevista + oferta + "/pre";
    return this.http.get<PreEntrevista[]>(this.apiUrl);
  }

  public getOfertasEmpresa(empresa:string): Observable<Oferta[]> {

    this.apiUrl = environment.urlOfertas+"/"+empresa ;
    return this.http.get<Oferta[]>(this.apiUrl);
  }

  public crearEntrevista(entrevista:Entrevista) {
    console.log("gaurdando entrevista -- URL  "+ environment.urlEntrevistas)
    console.log( JSON.stringify(entrevista) )

    return this.http.post(
      environment.urlEntrevistas ,entrevista
    )

  }


  public getEmpresas(): Observable<Company[]> {
    console.log(this.apiUrl)

    this.apiUrl = environment.urlEmpresas;
    return this.http.get<Company[]>(this.apiUrl);
  }

  public getOfertas(): Observable<Oferta[]> {
    console.log(this.apiUrl)

    this.apiUrl = environment.urlOfertas;
    return this.http.get<Oferta[]>(this.apiUrl);
  }


}
