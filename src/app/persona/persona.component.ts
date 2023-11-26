import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../core/template/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  targetLanguage : string = "es"
  opcionActual : string = "inicio"
  nombrePersona : string = "Juan"
  constructor(private languageService: LanguageService,private router : Router) {
    this.nombrePersona = String( sessionStorage.getItem("name"));
  }

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

    go(opcion: string): void {
      this.router.navigate([opcion]);
    }


}
