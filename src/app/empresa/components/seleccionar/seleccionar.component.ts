import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { CompaniesService, Profile, Company,Offer, candidatoListo} from '../../model/companies.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/template/services/language.service';

@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.component.html',
  styleUrls: ['./seleccionar.component.css']
})
export class SeleccionarComponent implements OnInit {

  llavecandidato!: string;
  targetLanguage : string = "es"
  candidatoactual!: Company;
  miscandidatos : candidatoListo[] = [];
  ofertas: Offer[] = [];
  profiles: Profile[] = [];
  roles: string[] = [];
  languages: string[] = [];
  tools: string[] = [];
  skills: string[] = [];


  public elcandidatoactual? :  Company;

  isToastOpen = false;


  public ionicForm: FormGroup = this.fb.group({
    oferta: new FormControl('', [Validators.required]),
    candidato: new FormControl('', [Validators.required]),


  });

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  goBack() {
    this.router.navigate(['empresa']);
  }

  go(opcion: string): void {
    this.router.navigate([opcion]);
  }

  ponerCandidatos(candidato: number): void {
    this.datosService.getCandidatosListos(this.llavecandidato).subscribe(datos => {
      this.miscandidatos = datos;
      console.log("Los candidatos listos son",datos);

    });

    ;

  }

  constructor(private fb: FormBuilder,private datosService: CompaniesService,private router : Router,private languageService: LanguageService) {
    this.llavecandidato = String( sessionStorage.getItem("llave"));
    this.getOfertas();

  }

  ngOnInit(): void {

    if(this.llavecandidato === undefined){
      this.llavecandidato = String( sessionStorage.getItem("llave"));
    }
  }


  getOfertas() {

    this.datosService.getOffers(this.llavecandidato).subscribe(datos => {
      this.ofertas = datos;
      console.log("Este es el candidato que trajo",datos);

    });
  }



  iniciar(): void {
    this.router.navigate(['persona']);
  }


  ponerIdioma(idioma: string): void {
    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }

  guardar2(datos: Company): void {
    console.log("va a guardar esto",datos);
  }

}
