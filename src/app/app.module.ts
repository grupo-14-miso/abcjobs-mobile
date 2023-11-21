import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { EmpresaModule } from './empresa/empresa.module';
import { InternoabcModule } from './internoabc/internoabc.module';
import { PersonaModule } from './persona/persona.module';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    IonicModule.forRoot({}),
    HttpClientModule,
    BrowserAnimationsModule,

    EmpresaModule,
    InternoabcModule,
    PersonaModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
