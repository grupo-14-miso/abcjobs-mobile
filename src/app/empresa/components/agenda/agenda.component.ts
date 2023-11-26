import { Component, OnInit } from '@angular/core';

import { CompaniesService, Profile, Company,Offer, candidatoListo} from '../../model/companies.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LanguageService } from '../../../core/template/services/language.service';
import { Router } from '@angular/router';
import { InterviewService,Interview } from '../../../core/template/services/interview.service';



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  targetLanguage : string = "es"
  public misentrevistas : Interview[] = [];

  constructor(private fb: FormBuilder,private entrevistasService: InterviewService,private router : Router,private languageService: LanguageService) {
    this.getEntrevistasWs()
  }

  ngOnInit(): void {
  }
  go(opcion: string): void {
    this.router.navigate([opcion]);
  }


  abreLink(mientrevista:Interview){
    window.open(mientrevista.link, "_blank");
  }

  getEntrevistasWs() {
    let key = Number(sessionStorage.getItem("llave"));

    this.entrevistasService.getInterviewsByCompany(key).subscribe(datos => {
      this.misentrevistas = datos;


    });
  }

  ponerIdioma(idioma: string): void {
    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;

  }

}
