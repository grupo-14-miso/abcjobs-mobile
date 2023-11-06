import { Component, Input, Output, EventEmitter } from '@angular/core';
import {  Examen, Respuesta ,Question,Answer} from '../prueba/prueba';
import { PruebasService } from '../listar-pruebas/pruebas.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})



export class ExamenComponent  {
  listavisible: any[] = []
  listartas?: Answer[] = []
  ex: number=0;
  pregunta: number=0;
  totalPreguntas: number=0;
  operacionSeleccionada: string = 'Ninguna';
  selectedOption: string = '';
  isSubmitted = false;
  isActive = true;
  isDisabled = true;
  respuestas : Respuesta[] = []
  rtasSelect : string[] = [""]

  @Output()
  public finalizarExamen: EventEmitter<Respuesta[]> = new EventEmitter();

  @Input()
  public miexamen!: Examen ;

  ngOnInit(): void {
    this.selectedOption = '';
    this.isSubmitted = false;
    this.isActive = true;
    this.isDisabled = true;
    this.pregunta=0
  }

  constructor(private pruebasService: PruebasService) {

  }

  guardarPregunta(codExamen:number,rta: Respuesta) {

    console.log("gaurdando examen--  "+ codExamen)
    console.log(rta)
    let retorno = this.pruebasService.guardarPregunta(codExamen, rta).subscribe(datos => {
      console.log(datos)
    });
    console.log(retorno)
  }

  FinalizaExamen(codExamen:number) {

    let retorno = this.pruebasService.finalizarPrueba(codExamen).subscribe(datos => {
      console.log(datos)
    });
    console.log(retorno)
  }

  traePregunta (){
    let retorno: Question[] ;
    const { questions:preguntas } =  this.miexamen
    this.totalPreguntas = preguntas.length;
    const { description:descripcion } = preguntas[this.pregunta]
    this.traeRtas();
    return descripcion
  }

  traeRtas (){
    if ( this.miexamen !== undefined) {
      //console.info(this.miexamen.status)
      let cadena : any ;
      const { questions:preguntas } =  this.miexamen
      const { answers:rtas } = preguntas[this.pregunta]
      this.listartas = rtas


    }
  }

  traeTexto(rtas:Answer){
    return Object.values(rtas)
  }

  traeCodPregunta(rtas:number){
    switch (rtas) {
      case 0:
        return 'a'
      case 1:
        return 'b'
      case 2:
        return 'c'
      case 3:
        return 'd'
      default:
        return 'a'
    }
  }



  onSubmit() {

    this.isSubmitted = true;

    this.rtasSelect = [this.traeCodPregunta(parseInt(this.selectedOption)) ]

    let rta: Respuesta = new Respuesta(this.miexamen.questions[this.pregunta].correct_answer, this.rtasSelect , this.miexamen.questions[this.pregunta].description,this.miexamen.questions[this.pregunta].answers)
    this.respuestas.push(rta)
    console.log('Opcion seleccionada:', this.selectedOption);
    console.info(rta)
    this.guardarPregunta(this.miexamen.assignment_id,rta )
    //limpiar variable
    this.selectedOption = '';
    this.pregunta = this.pregunta +1

  }

  finalizar() {
    this.onSubmit()
    this.FinalizaExamen(this.miexamen.assignment_id)
    this.finalizarExamen.emit(this.respuestas)

  }



}
