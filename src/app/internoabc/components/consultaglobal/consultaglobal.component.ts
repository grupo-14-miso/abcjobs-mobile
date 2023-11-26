import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../../persona/components/resultados/resultado.service'
import { LanguageService } from 'src/app/core/template/services/language.service';
import { Examen } from '../../../persona/components/prueba/prueba';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consultaglobal',
  templateUrl: './consultaglobal.component.html',
  styleUrls: ['./consultaglobal.component.css']
})
export class ConsultaglobalComponent implements OnInit {

  [x: string]: any;

  public misexamenes :  Array<Examen> = [];
  examenSeleccionado = false;
  codExamen = 1;
  targetLanguage : string = "es"

  constructor(private resultadoService : ResultadoService,private router : Router,private languageService: LanguageService) {
    this.getPruebasWs()
  }

  resultadoExamen(miexamen: Examen)
  {

    return parseInt(miexamen.result)

  }

  getPruebasWs() {
    this.resultadoService.getTodaslasPruebas().subscribe(datos => {
      this.misexamenes = datos;
      console.log(this.misexamenes)

    });
  }

  seleccionaExamen(examen:number){
    this.examenSeleccionado = true;
    this.codExamen = examen
  }

  ponerIdioma(idioma: string): void {

    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }

  goBack() {
    this.router.navigate(['persona']);
  }

  go(opcion: string): void {
    this.router.navigate([opcion]);
  }


  ngOnInit() {

  }

}
