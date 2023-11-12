import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule } from "@angular/forms";
import { ExamenComponent } from "./components/examenes/examen.component"
import { ListarPruebasComponent } from "./components/listar-pruebas/listar-pruebas.component";
import { PruebaComponent } from "./components/prueba/prueba.component";
import { PersonaComponent } from './persona.component';
import { RouterModule } from '@angular/router';
import { EncabezadosComponent } from './components/encabezados/encabezados.component';
import { CoreModule } from '../core/core.module';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { DatosComponent } from './components/datos/datos.component';
import { LaboralComponent } from './components/laboral/laboral.component';
import { AcademicaComponent } from './components/academica/academica.component';
import { TecnicaComponent } from './components/tecnica/tecnica.component';



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
    EncabezadosComponent,
    DatosComponent,
    LaboralComponent,
    AcademicaComponent,
    TecnicaComponent
  ]
})
export class PersonaModule { }
