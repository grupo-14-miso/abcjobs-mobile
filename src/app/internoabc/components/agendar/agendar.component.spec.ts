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

describe('AgendarComponent', () => {
  let component: AgendarComponent;
  let fixture: ComponentFixture<AgendarComponent>;
  let pruebasService: PreentrevistaService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarComponent,EncabezadosComponent ],
      imports: [ RouterTestingModule ,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        IonicModule,
      ],
      providers: [ PreentrevistaService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });


  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ AgendarComponent,EncabezadosComponent ],
      imports: [HttpClientTestingModule],
      providers: [PreentrevistaService],
      schemas: [NO_ERRORS_SCHEMA]
    });

    pruebasService = TestBed.get(PreentrevistaService);
    fixture = TestBed.createComponent(AgendarComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
