import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProgramarComponent } from './programar.component';
import { EncabezadosComponent } from '../encabezados/encabezados.component';
import { CoreModule } from '../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AutenticacionService, registro } from '../../../core/template/services/autenticacion.service'

describe('ProgramarComponent', () => {
  let component: ProgramarComponent;
  let fixture: ComponentFixture<ProgramarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramarComponent,EncabezadosComponent],
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
    .compileComponents();

    fixture = TestBed.createComponent(ProgramarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
