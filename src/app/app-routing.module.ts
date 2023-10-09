import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch:'full'
  },
  {
    path: 'inicio',
    component:InicioComponent

  },
  {
    path: 'prueba',
    component:PruebaComponent

  },
  {
    path: 'home',
    component:HomeComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }