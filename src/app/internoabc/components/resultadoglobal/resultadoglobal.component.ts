import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LanguageService } from '../../../core/template/services/language.service';
import { Router } from '@angular/router';
import { InterviewService,Interview,Result } from '../../../core/template/services/interview.service';




@Component({
  selector: 'app-resultadoglobal',
  templateUrl: './resultadoglobal.component.html',
  styleUrls: ['./resultadoglobal.component.css']
})
export class ResultadoglobalComponent implements OnInit {
  targetLanguage : string = "es"
  public misentrevistas : Interview[] = [];
  resultado: Result = {result: '' };

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

    this.entrevistasService.getInterviews().subscribe(datos => {
      this.misentrevistas = datos;
      console.log("misentrevistas",this.misentrevistas);


    });
  }


  guardar(entrevista:number): void {


    this.resultado.result = this.ionicForm.get('result')?.value;
    this.entrevistasService.postInterviewsResult(entrevista,this.resultado).subscribe(datos => {

      console.log("retorno del putIdiomas",datos)
      this.ionicForm.reset();
      this.getEntrevistasWs();
      this.ionicForm.reset();
    });





  }




  ponerIdioma(idioma: string): void {
    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;

  }

  public ionicForm: FormGroup = this.fb.group({

    result: new FormControl('', [Validators.required]),


  });

}
