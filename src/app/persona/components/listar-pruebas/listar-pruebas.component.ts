import { Component, OnInit } from '@angular/core';
import {  Respuesta ,Examen,Entrevista} from '../prueba/prueba';
import { PruebasService } from './pruebas.service';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { Router } from '@angular/router';
import { InterviewService,Interview } from 'src/app/core/template/services/interview.service';


@Component({
  selector: 'app-listar-pruebas',
  templateUrl: './listar-pruebas.component.html',
  styleUrls: ['./listar-pruebas.component.css']
})
export class ListarPruebasComponent  {
  [x: string]: any;

  public misexamenes :  Array<Examen> = [];
  public misentrevistas : Interview[] = [];
  examenSeleccionado = false;
  codExamen = 0;
  targetLanguage : string = "es"

  constructor(private entrevistasService: InterviewService,private pruebasService: PruebasService,private router : Router,private languageService: LanguageService) {
    this.getPruebasWs()
    this.getEntrevistasWs()
  }

  abreLink(mientrevista:Interview){
    window.open(mientrevista.link, "_blank");
  }

  go(opcion: string): void {
    this.router.navigate([opcion]);
  }



  ponerIdioma(idioma: string): void {

    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }




  getPruebasWs() {
    let key = String(sessionStorage.getItem("llave"));

    this.pruebasService.getPruebas(key).subscribe(datos => {
      this.misexamenes = datos;


    });
  }

  getEntrevistasWs() {
    let key = Number(sessionStorage.getItem("llave"));

    this.entrevistasService.getInterviewsByCandidate(key).subscribe(datos => {
      this.misentrevistas = datos;


    });
  }


  seleccionaExamen(examen:number){
    this.examenSeleccionado = true;
    this.codExamen = examen
  }

  examenFinalizado(rta:Respuesta[]){
    console.log(rta)
    this.examenSeleccionado = false;
    this.codExamen = 0
    this.go('persona')

  }


}
