import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarComponent } from './internoabc/components/agendar/agendar.component';
import { PersonaComponent } from './persona/persona.component';
import { ResultadosComponent } from './persona/components/resultados/resultados.component';
import { ListarPruebasComponent } from './persona/components/listar-pruebas/listar-pruebas.component';
import { InternoabcComponent } from './internoabc/internoabc.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProgramarComponent } from './internoabc/components/programar/programar.component';
import { EntrevistasComponent } from './internoabc/components/entrevistas/entrevistas.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegistroComponent } from './core/components/registro/registro.component';
import { DatosComponent } from './persona/components/datos/datos.component';
import { TecnicaComponent } from './persona/components/tecnica/tecnica.component';
import { LaboralComponent } from './persona/components/laboral/laboral.component';
import { AcademicaComponent } from './persona/components/academica/academica.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path: 'inicio',
    component:ListarPruebasComponent

  },
  {
    path: 'login',
    component:LoginComponent

  },
  {
    path: 'persona',
    component:PersonaComponent
  },
  {
    path: 'empresa',
    component:EmpresaComponent
  },
  {
    path: 'internoabc',
    component:InternoabcComponent
  },
  {
    path: 'internoabc/agendar',
    component:AgendarComponent
  },
  {
    path: 'internoabc/programar',
    component:ProgramarComponent
  },
  {
    path: 'internoabc/resultados',
    component:ResultadosComponent
  },
  {
    path: 'internoabc/entrevistas',
    component:EntrevistasComponent
  },

  {
    path: 'examen/:id',
    component:ListarPruebasComponent
  },
  {
    path: 'resultados',
    component:ResultadosComponent
  },
  {
    path: 'registro',
    component:RegistroComponent
  },
  {
    path: 'persona/datos',
    component:DatosComponent
  },
  {
    path: 'persona/laboral',
    component:LaboralComponent
  },
  {
    path: 'persona/academica',
    component:AcademicaComponent
  },
  {
    path: 'persona/idiomas',
    component:AcademicaComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
