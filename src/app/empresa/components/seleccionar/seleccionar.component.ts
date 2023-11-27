import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { CompaniesService, Profile, Offer, candidatoListo, MemberTeam} from '../../model/companies.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/template/services/language.service';

@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.component.html',
  styleUrls: ['./seleccionar.component.css']
})
export class SeleccionarComponent implements OnInit {

  ofertaSeleccionada: number = 0;
  llavecandidato = "";
  targetLanguage : string = "es"

  miscandidatos : candidatoListo[] = [];
  ofertas: Offer[] = [];
  profiles: Profile[] = [];
  roles: string[] = [];
  languages: string[] = [];
  tools: string[] = [];
  skills: string[] = [];
  nombreCandidato = "";


  isToastOpen = false;


  public ionicForm: FormGroup = this.fb.group({
    offer_id: new FormControl('', [Validators.required]),
    candidate_id: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required]),
    nombre: new FormControl('', ),


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

  ponerCandidatos(): void {
    this.companieService.getCandidatosListos(this.ofertaSeleccionada).subscribe(datos => {
      this.miscandidatos = datos;
      console.log("Los candidatos listos son",datos);

    });

    ;

  }

  constructor(private fb: FormBuilder,private companieService: CompaniesService,private router : Router,private languageService: LanguageService) {
    this.llavecandidato = String( sessionStorage.getItem("llave"));
    this.getOfertas();
    this.ionicForm.controls['offer_id'].valueChanges.subscribe((value) => {
      this.ofertaSeleccionada = value;
      this.ponerCandidatos();
    }
    );

    this.ionicForm.controls['candidate_id'].valueChanges.subscribe((value) => {
      let nombre = this.miscandidatos.filter(persona => persona.id === value)[0].name;
      if (nombre !== undefined) {

        console.log("El candidato seleccionado es",nombre);
        console.log("El candidato seleccionado es de nombre",this.miscandidatos);
        this.ionicForm.controls['nombre'].setValue(nombre );
      }

    }
    );

  }

  ngOnInit(): void {

    if(this.llavecandidato === undefined){
      this.llavecandidato = String( sessionStorage.getItem("llave"));
    }
  }


  getOfertas() {

    this.companieService.getOffers(this.llavecandidato).subscribe(datos => {
      this.ofertas = datos;
      console.log("Este es las ofertas que trajo",datos);

    });
  }



  iniciar(): void {
    this.router.navigate(['persona']);
  }


  ponerIdioma(idioma: string): void {
    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }

  guardar2(datos: MemberTeam): void {

    console.log("guardando  ",datos);
    this.setOpen(true)
    this.companieService.saveMemberTeam(datos).subscribe(rta => {

      console.log("Rta guardar",rta);
     this.go('empresa')
    });

  }

}
