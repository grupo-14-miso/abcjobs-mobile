import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternoabcComponent } from './internoabc.component';
import { EncabezadosComponent } from './components/encabezados/encabezados.component';
import { IonicModule } from '@ionic/angular';
import { ProgramarComponent } from './components/programar/programar.component';
import { AgendarComponent } from './components/agendar/agendar.component';
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EntrevistasComponent } from './components/entrevistas/entrevistas.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,IonicModule,AppRoutingModule,ReactiveFormsModule,FormsModule,RouterModule,CoreModule
  ],
  exports: [
    InternoabcComponent,EncabezadosComponent, ProgramarComponent,AgendarComponent, EntrevistasComponent
  ],
  declarations: [InternoabcComponent,EncabezadosComponent, ProgramarComponent,AgendarComponent, EntrevistasComponent]
})
export class InternoabcModule { }
