import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { DatosService, Candidate ,Profile} from './datos.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/template/services/language.service';
import { PersonaComponent } from '../../persona.component';




@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  @Output() ponerOpcion = new EventEmitter<string>();
  llavecandidato!: string;
  targetLanguage : string = "es"
  candidatoactual!: Candidate;
  micomponent = PersonaComponent;

  profiles: Profile[] = [];
  roles: string[] = [];
  languages: string[] = [];
  tools: string[] = [];
  skills: string[] = [];


  public elcandidatoactual? :  Candidate;

  isToastOpen = false;


  public ionicForm: FormGroup = this.fb.group({
    Nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    documento: new FormControl('', [Validators.required]),
    ciudad_nacimiento: new FormControl<string>(''),
    ciudad_residencia: new FormControl<string>(''),
    email: new FormControl<string>(''),
    estado_civil: new FormControl<string>(''),
    fecha_nacimiento: new FormControl<string>(''),
    genero: new FormControl<string>(''),
    id_candidato: new FormControl<string>(''),
    nacionalidad: new FormControl<string>(''),
    pais_nacimiento: new FormControl<string>(''),
    pais_residencia: new FormControl<string>(''),
    segundo_apellido: new FormControl<string>(''),
    segundo_nombre: new FormControl<string>(''),
    telefono: new FormControl<string>(''),
    tipo_documento: new FormControl<string>(''),
    key: new FormControl<string[]>([]),
    lenguajes_programacion: new FormControl<string[]>([]),
    tecnologias_herramientas: new FormControl<string[]>([]),
    educacion: new FormControl<string[]>([]),
    experiencia: new FormControl<string[]>([]),
    idiomas: new FormControl<string[]>([]),
    rol: new FormControl<string[]>([]),
    //soft_skill: new FormControl<string[]>([]),

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


    this.getProfiles();

  }



  getProfiles() {

    this.datosService.getProfiles().subscribe({
      next: (data) => {
        this.profiles = data;
        this.filterProfilesByType();

      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  filterProfilesByType() {
    this.roles = this.getNamesByType('Rol');
    console.log(this.roles);
    this.languages = this.getNamesByType('programming_languages');
    this.skills = this.getNamesByType('soft_skill');
    this.tools = this.getNamesByType('tools');
  }

  getNamesByType(type: string): string[] {
    return this.profiles
      .filter((profile) => profile.type === type)
      .map((profile) => profile.names)
      .reduce((acc, names) => acc.concat(names), []);
  }


  getDatosWs() {

    this.datosService.getDatos(this.llavecandidato).subscribe(datos => {

      this.candidatoactual = datos;
      console.log(datos);
      this.ionicForm.setValue(this.candidatoactual)


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



  guardar2(author: Candidate){
    this.candidatoactual = author
    console.info("The author was created: ", this.candidatoactual)
    this.setOpen(true)
    this.putDatosWs(this.candidatoactual);
    //this.ionicForm.reset();
  }

  guardar = () => {
    if (this.ionicForm.valid) {
      this.candidatoactual.Nombre = this.ionicForm.get('Nombre')?.value?.toString() ?? '';
      this.candidatoactual.apellido = this.ionicForm.get('apellido')?.value?.toString()?? ''
      this.candidatoactual.documento = this.ionicForm.get('documento')?.value?.toString()?? ''
      this.candidatoactual.email = this.ionicForm.get('email')?.value?.toString() ?? '';
      this.candidatoactual.ciudad_nacimiento= this.ionicForm.get('ciudad_nacimiento')?.value?.toString() ?? '';
      this.candidatoactual.fecha_nacimiento= this.ionicForm.get('fecha_nacimiento')?.value?.toString() ?? '';
      console.log( "esto va a guardar"+JSON.stringify(this.candidatoactual));

      this.putDatosWs(this.candidatoactual);
      this.router.navigate(['persona/datos']);


      return false;
    } else {

      return console.log('Please provide all the required values!');
    }



  }

  putDatosWs(micandidato: Candidate) {
    this.datosService.putDatos(micandidato).subscribe(datos => {
      console.log(datos)
    });
  }


}
