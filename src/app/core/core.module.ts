import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './template/header/header.component';
import { RouterModule } from '@angular/router';
import { TranslationService } from './template/services/translation.service';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { TranslatePipe } from './template/pipes/translate.pipe';
import { LanguageService } from './template/services/language.service';
import { LoginComponent } from './components/login/login.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ HeaderComponent, TranslatePipe,LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,

  ],
  providers:[ TranslationService, LanguageService],
  exports: [ TranslatePipe,ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CoreModule { }
