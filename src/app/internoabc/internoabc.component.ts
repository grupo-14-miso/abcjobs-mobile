import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../core/template/services/language.service';

@Component({
  selector: 'app-internoabc',
  templateUrl: './internoabc.component.html',
  styleUrls: ['./internoabc.component.css']
})
export class InternoabcComponent implements OnInit {
  targetLanguage : string = "es"
  opcionActual : string = "inicio"

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }


  ponerIdioma(idioma: string): void {

    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }

  ponerOpcion(opcion: string): void {
    if (opcion == "" || opcion == undefined ) {
      this.opcionActual = "inicio";
    }
    console.log("recibido", opcion);
      this.opcionActual = opcion;
    }


}
