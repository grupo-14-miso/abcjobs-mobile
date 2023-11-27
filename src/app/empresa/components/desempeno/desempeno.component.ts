import { Component, OnInit } from '@angular/core';
import { CompaniesService, Profile, Company,Offer} from '../../model/companies.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from '../../../core/template/services/language.service';
import { InterviewService ,InterviewPreCandidate, SelectCandidate} from 'src/app/core/template/services/interview.service';
import { PruebasService } from '../../../persona/components/listar-pruebas/pruebas.service';
import { Examen } from 'src/app/persona/components/prueba/prueba';



@Component({
  selector: 'app-desempeno',
  templateUrl: './desempeno.component.html',
  styleUrls: ['./desempeno.component.css']
})
export class DesempenoComponent implements OnInit {
  candidates: SelectCandidate[] = [];
  targetLanguage : string = "es"
  llaveempresa!: string;
  isToastOpen = false;
  ofertas: Offer[] = [];
  ofertaactual: number = 0;
  examenes: Examen[] = [];
  entrevistaDesempeno?: InterviewPreCandidate;


  go(opcion: string): void {
    this.router.navigate([opcion]);
  }


  public ionicForm: FormGroup = this.fb.group({

    id_offer: new FormControl('', [Validators.required]),
    id_candidate:   new FormControl('', [Validators.required]),
    id_examen:   new FormControl('', [Validators.required]),

  });

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  goBack() {
    this.router.navigate(['empresa']);
  }


  constructor(private assignmentService :PruebasService,private entrevista: InterviewService, private fb: FormBuilder,private datosService: CompaniesService,private router : Router,private languageService: LanguageService) {
    this.llaveempresa = String( sessionStorage.getItem("llave"));


  }

  ngOnInit(): void {

    if(this.llaveempresa === undefined){
      this.llaveempresa = String( sessionStorage.getItem("llave"));
    }
    this.loadData()
  }

  loadCandidateByOffer(offerId: number) {
    console.log("oferta actual loadCandidateByOffer",this.ofertaactual);
    if (this.ofertaactual) {
      this.entrevista.getCandidatesByOffer(this.ofertaactual).subscribe((candidates) => {
        this.candidates = candidates;

      });
    } else {
      this.candidates = [];
    }
  }

  cargarExamenesDesempeno() {


      this.assignmentService.getPruebasxTipo('Performance').subscribe((assignments) => {
        this.examenes = assignments;
        console.log("examenes que trajo",assignments);

      });

  }


  loadData(){

    this.getOfertas();
    this.cargarExamenesDesempeno();
    this.ionicForm.controls['id_offer'].valueChanges.subscribe((value) => {
      this.ofertaactual = value;
      this.loadCandidateByOffer(value);
    }
    );

  }


  getOfertas() {

    this.datosService.getOffers(this.llaveempresa).subscribe(datos => {
      this.ofertas = datos;
      console.log("ofertas que trajo",datos);

    });
  }

  guardar(): void {
    let examen:number;
    let candidato:number;
    examen = this.ionicForm.get('id_examen')?.value;
    candidato = this.ionicForm.get('id_candidate')?.value;

    this.assignmentService.postAsignarPruebaaCandidato(examen,candidato).subscribe((datos) => {
      console.log("datos que trajo",datos);
      this.setOpen(true);
      this.ionicForm.reset();
    });
  }



  iniciar(): void {
    this.router.navigate(['empresa']);
  }


  ponerIdioma(idioma: string): void {
    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }



}
