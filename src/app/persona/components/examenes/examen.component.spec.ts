import { RouterTestingModule } from '@angular/router/testing';
import { ExamenComponent } from './examen.component';
import { Examen, Respuesta } from '../prueba/prueba';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { PruebasService } from '../listar-pruebas/pruebas.service';
import { IonicModule } from '@ionic/angular';
import { TranslationService } from 'src/app/core/template/services/translation.service';
import { TranslatePipe } from 'src/app/core/template/pipes/translate.pipe';

