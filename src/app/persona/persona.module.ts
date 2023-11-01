import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule } from "@angular/forms";
import { ResultadosComponent } from './components/resultados/resultados.component';
import { ExamenComponent } from "./components/examenes/examen.component"
import { ListarPruebasComponent } from "./components/listar-pruebas/listar-pruebas.component";
import { PruebaComponent } from "./components/prueba/prueba.component";
import { PersonaComponent } from './persona.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AppRoutingModule,
    FormsModule,

  ],
  exports: [
    PersonaComponent
  ],
  declarations: [PersonaComponent,
    ListarPruebasComponent,
    PruebaComponent,
    ExamenComponent,
    ResultadosComponent
  ]
})
export class PersonaModule { }