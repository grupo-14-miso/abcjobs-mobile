import { Component, OnInit } from '@angular/core';
import {  Respuesta , Examen} from '../prueba/prueba';
import { ResultadoService } from './resultado.service'
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  [x: string]: any;

  public misexamenes :  Array<Examen> = [];
  examenSeleccionado = false;
  codExamen = 1;


  constructor(private resultadoService : ResultadoService) {
    this.getPruebasWs()
  }

  resultadoExamen(miexamen: Examen)
  {

    return parseInt(miexamen.result)

  }

  getPruebasWs() {
    this.resultadoService.getPruebas().subscribe(datos => {
      this.misexamenes = datos;
      console.log(this.misexamenes)

    });
  }

  seleccionaExamen(examen:number){
    this.examenSeleccionado = true;
    this.codExamen = examen
  }

  ngOnInit() {
  }

}
