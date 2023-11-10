import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './template/header/header.component';


import { RouterModule } from '@angular/router';
import { TranslationService } from './template/services/translation.service';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from './template/pipes/translate.pipe';
import { LanguageService } from './template/services/language.service';

@NgModule({
  declarations: [ HeaderComponent, TranslatePipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[ TranslationService, LanguageService],
  exports: [ TranslatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CoreModule { }
