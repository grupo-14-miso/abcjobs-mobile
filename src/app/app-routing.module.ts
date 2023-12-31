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
import { LaboralComponent } from './persona/components/laboral/laboral.component';
import { AcademicaComponent } from './persona/components/academica/academica.component';
import { IdiomasComponent } from './persona/components/idiomas/idiomas.component';
import { RegistroempresaComponent } from './core/components/registroempresa/registroempresa.component';
import { RegistroadminComponent } from './core/components/registroadmin/registroadmin.component';
import { SeleccionarComponent } from './empresa/components/seleccionar/seleccionar.component';
import { DesempenoComponent } from './empresa/components/desempeno/desempeno.component';
import { ResultadosComponentem } from './empresa/components/resultadosem/resultadosem.component';
import { AgendaComponent } from './empresa/components/agenda/agenda.component';
import { ResolverpruebaComponent } from './empresa/components/resolverprueba/resolverprueba.component';
import { ResultadoglobalComponent } from './internoabc/components/resultadoglobal/resultadoglobal.component';
import { ConsultaglobalComponent } from './internoabc/components/consultaglobal/consultaglobal.component';


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
    path: 'registro',
    component:RegistroComponent
  },
  {
    path: 'registro/empresa',
    component:RegistroempresaComponent
  },
  {
    path: 'registro/admin',
    component:RegistroadminComponent
  },


  {
    path: 'persona',
    component:PersonaComponent
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
    component:IdiomasComponent
  },
  {
    path: 'persona/resultados',
    component:ResultadosComponent
  },
  {
    path: 'persona/procesos',
    component:ListarPruebasComponent
  },
    {
    path: 'examen/:id',
    component:ListarPruebasComponent
  },


  {
    path: 'empresa',
    component:EmpresaComponent
  },
  {
    path: 'empresa/seleccionar',
    component:SeleccionarComponent
  },
  {
    path: 'empresa/desempeno',
    component:ResolverpruebaComponent
  },
  {
    path: 'empresa/resultados',
    component:ResultadosComponentem
  },
  {
    path: 'empresa/entrevistas',
    component:AgendaComponent
  },
  {
    path: 'empresa/programar',
    component:DesempenoComponent
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
    component:ResultadoglobalComponent
  },
  {
    path: 'internoabc/entrevistas',
    component:EntrevistasComponent
  },
  {
    path: 'internoabc/consulta',
    component:ConsultaglobalComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
