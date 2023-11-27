import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Company, Oferta, PreEntrevista ,Candidate,Entrevista} from '../../model/preentrevista';
import { PreentrevistaService } from '../../model/preentrevista.service';
import { Router } from '@angular/router';
import { LanguageService } from '../../../core/template/services/language.service';

@Component({
  selector: 'app-programar',
  templateUrl: './programar.component.html',
  styleUrls: ['./programar.component.css']
})
export class ProgramarComponent implements OnInit {
  backButtonText = 'Go Back';
  targetLanguage : string = "es"
  public listaEmpresas :  Array<Company> = [];
  public listaPreentrevistas :  Array<PreEntrevista> = [];
  public listaOfertas :  Array<Oferta> = [];
  public listaCandidatos :  Array<Candidate> = [];
  public cod_empresa: number = 0;
  public fechaAgendado : Date = new Date(2023, 8, 10, 9,0,0);
  public entrevista : Entrevista = new Entrevista("",[], "", "", "", "");
  selectedEmpresa: Company = new Company(0, '', '', '', '', '', '', '', '');



  public ionicForm = new FormGroup({
    empresa: new FormControl<Company[]>(this.listaEmpresas,[Validators.required]),
    oferta: new FormControl<Oferta[]>(this.listaOfertas,[Validators.required]),
    candidato: new FormControl<Candidate[]>(this.listaCandidatos,[Validators.required]),
    pruebas: new FormControl<string>('',[Validators.required]),

  });



  seleccionaEmpresa() {
    const empresa = this.ionicForm.get('empresa')?.value?.toString();
    if (empresa) {
      this.entrevista.id_company = empresa;
      this.getOfertasEmpresa(empresa);
    }

  }

  seleccionaOferta() {
    const oferta = this.ionicForm.get('oferta')?.value?.toString();
    if (oferta) {
      this.entrevista.id_offer = oferta;
      this.getCandidatosOferta(oferta);
    }

  }

  seleccionaCandidato() {
    const miCandidato = this.ionicForm.get('candidato')?.value?.toString();
    if (miCandidato) {
      this.entrevista.candidates.push(miCandidato);
      console.log("candidato seleccionado:" + miCandidato);
    }

  }



  constructor(private languageService: LanguageService,public formBuilder: FormBuilder,private resultado : PreentrevistaService, private router : Router) {
    this.getEmpresas()
  }
  ngOnInit() {

  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm = () => {

    if (this.ionicForm.valid) {
      //this.entrevista.pruebas = this.ionicForm.get('descripcion')?.value?.toString() ?? '';
      //poner aqui el tipo de examen

      this.resultado.crearEntrevista(this.entrevista).subscribe(datos => {
        console.log( "GUardado"+datos);
        this.ionicForm.reset();
        this.router.navigate(['internoabc/entrevistas']);

      });


      return false;
    } else {

      return console.log('Please provide all the required values!');
    }
  };

  getEmpresas() {
    this.resultado.getEmpresas().subscribe(datos => {
      this.listaEmpresas = datos;

    });
  }

  getOfertasEmpresa(empresa : string) {
    this.listaOfertas = []
    this.resultado.getOfertasEmpresa(empresa).subscribe(datos => {
      this.listaOfertas = datos;


    });
  }

  getCandidatosOferta(oferta : string) {
    this.listaCandidatos = []
    this.resultado.getPreEntrevistas(oferta).subscribe(datos => {
      this.listaPreentrevistas = datos;
      datos.forEach(element => {
        this.listaCandidatos.push(element.candidate)
      })


    });
  }


  cambiaEmpresa(datos: any) {
    console.log(datos)
  }


  go(opcion: string): void {
    this.router.navigate([opcion]);
  }


  ponerIdioma(idioma: string): void {

    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }

}
