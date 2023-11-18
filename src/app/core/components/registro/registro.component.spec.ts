import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LanguageService } from '../../template/services/language.service'
import { Router } from '@angular/router';
import { AutenticacionService, registro } from '../../template/services/autenticacion.service'
import { CoreModule } from '../../core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { IonicModule } from '@ionic/angular';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let pruebasService: AutenticacionService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [RegistroComponent],
      imports: [RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        IonicModule,
        CoreModule
      ],
      providers: [AutenticacionService],
      schemas: [NO_ERRORS_SCHEMA]
    })
  });


  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [RegistroComponent],
      imports: [HttpClientTestingModule],
      providers: [AutenticacionService],
      schemas: [NO_ERRORS_SCHEMA]
    });

    pruebasService = TestBed.get(AutenticacionService);
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;

    // Add null check before accessing the object property

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
