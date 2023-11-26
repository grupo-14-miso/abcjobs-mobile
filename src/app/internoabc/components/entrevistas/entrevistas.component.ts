import { Component, OnInit } from '@angular/core';
import { Entrevista } from '../../model/preentrevista';
import { PreentrevistaService } from '../../model/preentrevista.service';
import { LanguageService } from '../../../core/template/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent implements OnInit {
  public misEntrevistas :  Array<Entrevista> = [];
  public ofertaEmpresa : number = 5683780991844352;
  targetLanguage : string = "es"
  constructor(private languageService: LanguageService, private router : Router,private resultado : PreentrevistaService) {
    this.getEntrevistas()
  }

  ngOnInit(): void {
  }

  abreLink(mientrevista:string){
    window.open(mientrevista, "_blank");
  }


  getEntrevistas() {
    this.resultado.getEntrevistas().subscribe(datos => {
      this.misEntrevistas = datos;
      console.log(this.misEntrevistas)

    });
  }


  go(opcion: string): void {
    this.router.navigate([opcion]);
  }


  ponerIdioma(idioma: string): void {

    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }

}
