import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './empresa.component';
import { EncabezadosComponent } from './components/encabezados/encabezados.component';
import { DesempenoComponent } from './components/desempeno/desempeno.component';
import { SeleccionarComponent } from './components/seleccionar/seleccionar.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
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
  declarations: [EmpresaComponent, EncabezadosComponent, DesempenoComponent, SeleccionarComponent, AgendaComponent, ResultadosComponent]
})
export class EmpresaModule { }
