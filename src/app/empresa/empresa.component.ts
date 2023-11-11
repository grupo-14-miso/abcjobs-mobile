import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../core/template/services/language.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
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
