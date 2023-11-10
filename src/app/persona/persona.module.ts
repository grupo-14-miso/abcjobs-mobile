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
import { RouterModule } from '@angular/router';
import { EncabezadosComponent } from './components/encabezados/encabezados.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CoreModule

  ],
  exports: [
    PersonaComponent,
    ResultadosComponent,
    ListarPruebasComponent,
    PruebaComponent,
    ExamenComponent,
    EncabezadosComponent
  ],
  declarations: [PersonaComponent,
    ListarPruebasComponent,
    PruebaComponent,
    ExamenComponent,
    ResultadosComponent,
    EncabezadosComponent
  ]
})
export class PersonaModule { }
