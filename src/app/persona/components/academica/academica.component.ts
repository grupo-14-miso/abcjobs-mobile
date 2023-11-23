import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { DatosService, Candidate ,Educacion} from '../datos/datos.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/template/services/language.service';



@Component({
  selector: 'app-academica',
  templateUrl: './academica.component.html',
  styleUrls: ['./academica.component.css']
})
export class AcademicaComponent implements OnInit {

  llavecandidato!: string;
  candidatoactual!: Candidate;
  targetLanguage : string = "es"
  posicion = 0;
  esnuevo = false;
  isToastOpen = false;
  estudios: Educacion[] = [];


  public ionicForm: FormGroup = this.fb.group({
    nivel_academico: new FormControl('', [Validators.required]),
    institucion: new FormControl('', [Validators.required]),
    titulo_obtenido: new FormControl('', [Validators.required]),
    fecha_fin: new FormControl<string>(''),
    fecha_inicio: new FormControl<string>(''),
    pais: new FormControl<string>(''),

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

  eliminar( ){
    this.estudios.splice(this.posicion,1);
    this.actualizarEstudio();
    this.ionicForm.reset();
    this.esnuevo = false;
    this.setPosicion(this.estudios.length - 1)
  }

  editar( experiencia: Educacion){
    this.ionicForm.setValue(experiencia);
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
      this.estudios = this.candidatoactual.educacion;
      console.log(datos);
      if (this.estudios.length > 0) {
        this.ionicForm.setValue(this.estudios[this.posicion] )
      }
      else{
        this.ionicForm.reset();
      }

    });

  }





  ponerIdioma(idioma: string): void {

    this.languageService.setLanguage(idioma);
    this.targetLanguage = idioma;
  }

  setPosicion(posicion: number): void {
    this.posicion = posicion;
    this.ionicForm.setValue(this.estudios[this.posicion] )
  }


  guardar(experiencia: Educacion){
    if (this.esnuevo){
      this.estudios.push(experiencia);
    }
    else{
      this.estudios[this.posicion] = experiencia;
    }

    this.candidatoactual.educacion = this.estudios;
    console.info("estudios guardada: ", this.candidatoactual.educacion)
    this.setOpen(true)
    this.actualizarEstudio();
    this.esnuevo = false;

  }

  nuevo(){
    this.ionicForm.reset();
    this.esnuevo = true;

  }


  actualizarEstudio() {
    this.datosService.putDatosEstudio(this.candidatoactual).subscribe(datos => {
      this.esnuevo = false;
      console.log("retorno del putDatosEstudio",datos)
    });


  }


}
