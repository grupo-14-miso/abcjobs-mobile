
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { DatosService, Candidate ,Experiencum,actualizaExperiencia} from '../datos/datos.service';
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
  candidatoactual!: Candidate;
  targetLanguage : string = "es"
  miscambios: actualizaExperiencia= {id_candidato:"",trabajos:[]};

  posicion = 0;
  esnuevo = false;

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


  constructor( private fb: FormBuilder,private datosService: DatosService,private router : Router,private languageService: LanguageService) {
    this.llavecandidato = String( sessionStorage.getItem("llave"));
    this.getDatosWs();


  }

  ngOnInit(): void {

    if(this.llavecandidato === undefined){
      this.llavecandidato = String( sessionStorage.getItem("llave"));

    }


  }



  getDatosWs() {

    this.datosService.getDatos(this.llavecandidato).subscribe(datos => {
      this.candidatoactual = datos;
      console.log(datos);
      if (datos.experiencia.length > 0) {
        this.miscambios.id_candidato = datos.id_candidato
        this.miscambios.trabajos= datos.experiencia
        this.ionicForm.setValue(this.miscambios.trabajos[this.posicion] )
      }
      else{
        this.miscambios.id_candidato = datos.id_candidato
        this.miscambios.trabajos = []

      }

    });

  }




  iniciar(): void {

    this.router.navigate(['persona']);
  }


  ponerIdioma(idioma: string): void {

    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }

  setPosicion(posicion: number): void {
    this.posicion = posicion;
    this.ionicForm.setValue(this.miscambios.trabajos[this.posicion] )
  }


  guardar2(experiencia: Experiencum){
    if (this.esnuevo){
      this.miscambios.trabajos.push(experiencia);
    }
    else{
        this.miscambios.trabajos[this.posicion] = experiencia;
    }


    console.info("Experiencia guardada: ", this.miscambios)
    this.setOpen(true)
    this.actualizarDatosLaborales(this.miscambios);
    this.esnuevo = false;
    //this.ionicForm.reset();
  }

  nuevo(){
    this.ionicForm.reset();
    this.esnuevo = true;

  }





  actualizarDatosLaborales(micandidato: actualizaExperiencia) {
    this.candidatoactual.experiencia = micandidato.trabajos

    this.datosService.putDatosLaborales(this.candidatoactual).subscribe(datos => {

      this.esnuevo = false;
      console.log("retorno del putDatosLaborales",datos)
    });


  }

  postDatosWs(micandidato: Candidate) {
    console.log(micandidato)
    this.datosService.postDatosUsuario(micandidato).subscribe(datos => {
      console.log(datos)

    });
  }



}


