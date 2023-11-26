import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './empresa.component';
import { EncabezadosComponent } from './components/encabezados/encabezados.component';
import { DesempenoComponent } from './components/desempeno/desempeno.component';
import { SeleccionarComponent } from './components/seleccionar/seleccionar.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ResultadosComponentem } from './components/resultadosem/resultadosem.component';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ResolverpruebaComponent } from './components/resolverprueba/resolverprueba.component';
import { PersonaModule } from '../persona/persona.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CoreModule,
    PersonaModule
  ],

  declarations: [EmpresaComponent,
    EncabezadosComponent,
    DesempenoComponent,
    SeleccionarComponent,
    AgendaComponent,
    ResultadosComponentem,
    ResolverpruebaComponent,

  ]
})
export class EmpresaModule { }
