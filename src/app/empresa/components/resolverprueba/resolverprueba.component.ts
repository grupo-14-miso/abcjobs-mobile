import { Component, OnInit } from '@angular/core';
import {  Respuesta ,Examen} from '../../../persona/components/prueba/prueba';
import { PruebasService } from '../../../persona/components/listar-pruebas/pruebas.service';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-resolverprueba',
  templateUrl: './resolverprueba.component.html',
  styleUrls: ['./resolverprueba.component.css']
})
export class ResolverpruebaComponent  {
  [x: string]: any;

  public misexamenes :  Array<Examen> = [];

  examenSeleccionado = false;
  codExamen = 0;
  targetLanguage : string = "es"

  constructor(private pruebasService: PruebasService,private router : Router,private languageService: LanguageService) {
    this.getPruebasWs()

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

    this.pruebasService.getPruebasDesempenoEmpresa(key).subscribe(datos => {
      this.misexamenes = datos;

      console.log("estos son misexamenes",this.misexamenes)
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
    this.go('empresa')

  }


}
