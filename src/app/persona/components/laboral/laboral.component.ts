
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { DatosService, Candidate ,Experiencum} from '../datos/datos.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { PersonaComponent } from '../../persona.component';





@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})

export class LaboralComponent implements OnInit {
  @Output() ponerOpcion = new EventEmitter<string>();
  llavecandidato!: string;
  targetLanguage : string = "es"
  candidatoactual!: Candidate;
  experienciaLaboral!: Experiencum[];
  micomponent = PersonaComponent;

  public elcandidatoactual :  Candidate = { Nombre: "XX", apellido:"YY", ciudad_nacimiento:"", ciudad_residencia:"", documento:"", educacion:[], email:"", estado_civil:"", experiencia:[], fecha_nacimiento:"", genero:"", id_candidato:"", idiomas:[], key:{id:0,kind:""}, lenguajes_programacion:[], nacionalidad:"", pais_nacimiento:"", pais_residencia:"", rol:[], segundo_apellido:"", segundo_nombre:"", tecnologias_herramientas:[], telefono:"", tipo_documento:""   };

  isToastOpen = false;


  public ionicForm: FormGroup = this.fb.group({
    cargo: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    empresa: new FormControl('', [Validators.required]),
    fecha_fin: new FormControl<string>(''),
    fecha_inicio: new FormControl<string>(''),
    pais: new FormControl<string>(''),
    rol: new FormControl<string>(''),

  });

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  goBack() {
    this.router.navigate(['persona']);
  }

  go(opcion: string): void {
    this.router.navigate([opcion]);
  }


  constructor(private fb: FormBuilder,private datosService: DatosService,private router : Router,private languageService: LanguageService) {
    this.llavecandidato = String( sessionStorage.getItem("llave"));
    this.getDatosWs();

  }

  ngOnInit(): void {

    if(this.llavecandidato === undefined){
      this.llavecandidato = String( sessionStorage.getItem("llave"));
      if (this.llavecandidato) {
        this.getDatosWs();

      }
    }

  }



  getDatosWs() {

    this.datosService.getDatos(this.llavecandidato).subscribe(datos => {

      this.candidatoactual = datos;
      console.log(datos);
      this.experienciaLaboral = this.candidatoactual.experiencia;
      this.ionicForm.setValue(this.experienciaLaboral[0] )


    });



  }


  mandarOpcion(opcion: string): void {
    console.log("mandarOpcion"+opcion)
    this.ponerOpcion.emit(opcion);
  }


  iniciar(): void {

    this.router.navigate(['persona']);
  }


  ponerIdioma(idioma: string): void {

    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }



  guardar2(author: Experiencum){
    this.experienciaLaboral[0] = author;
    this.candidatoactual.experiencia = this.experienciaLaboral
    console.info("The author was created: ", this.candidatoactual)
    this.setOpen(true)
    this.putDatosWs(this.candidatoactual);
    //this.ionicForm.reset();
  }

  guardar = () => {
    if (this.ionicForm.valid) {
      this.candidatoactual.experiencia[0].cargo = this.ionicForm.get('cargo')?.value?.toString() ?? '';
      this.candidatoactual.experiencia[0].ciudad = this.ionicForm.get('ciudad')?.value?.toString()?? ''
      this.candidatoactual.experiencia[0].empresa = this.ionicForm.get('empresa')?.value?.toString()?? ''
      this.candidatoactual.experiencia[0].fecha_fin = this.ionicForm.get('fecha_fin')?.value?.toString() ?? '';
      this.candidatoactual.experiencia[0].fecha_inicio= this.ionicForm.get('fecha_inicio')?.value?.toString() ?? '';
      this.candidatoactual.experiencia[0].pais= this.ionicForm.get('pais')?.value?.toString() ?? '';
      console.log( "esto va a guardar"+JSON.stringify(this.candidatoactual));

      this.putDatosWs(this.candidatoactual);
      this.router.navigate(['persona']);


      return false;
    } else {

      return console.log('Please provide all the required values!');
    }



  }

  putDatosWs(micandidato: Candidate) {
    this.datosService.putDatosLaborales(micandidato).subscribe(datos => {
      console.log(datos)
    });
  }

}


