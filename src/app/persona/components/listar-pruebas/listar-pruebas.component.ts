import { Component, OnInit } from '@angular/core';
import {  Respuesta ,Examen} from '../prueba/prueba';
import { PruebasService } from './pruebas.service';


@Component({
  selector: 'app-listar-pruebas',
  templateUrl: './listar-pruebas.component.html',
  styleUrls: ['./listar-pruebas.component.css']
})
export class ListarPruebasComponent  {
  [x: string]: any;

  public misexamenes :  Array<Examen> = [];
  examenSeleccionado = false;
  codExamen = 0;

  constructor(private pruebasService: PruebasService) {
    this.getPruebasWs()
  }


  getPruebasWs() {
    this.pruebasService.getPruebas().subscribe(datos => {
      this.misexamenes = datos;
      console.log(this.misexamenes)

    });
  }


  seleccionaExamen(examen:number){
    this.examenSeleccionado = true;
    this.codExamen = examen
  }

  examenFinalizado(rta:Respuesta[]){
    console.log(rta)
    this.examenSeleccionado = false;
    this.codExamen = 0
  }


}
