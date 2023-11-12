/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AgendarComponent } from './agendar.component';
import { EncabezadosComponent } from '../encabezados/encabezados.component';
import { PreentrevistaService } from '../../model/preentrevista.service';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { TranslationService } from 'src/app/core/template/services/translation.service';
import { TranslatePipe } from 'src/app/core/template/pipes/translate.pipe';
