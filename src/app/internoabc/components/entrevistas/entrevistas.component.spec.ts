import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncabezadosComponent } from '../encabezados/encabezados.component';
import { EntrevistasComponent } from './entrevistas.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { PreentrevistaService } from '../../model/preentrevista.service';
import { IonicModule } from '@ionic/angular';

//Bueno

describe('EntrevistasComponent', () => {
  let component: EntrevistasComponent;
  let fixture: ComponentFixture<EntrevistasComponent>;
  let pruebasService: PreentrevistaService;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ EntrevistasComponent,EncabezadosComponent ],
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
  });



  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ EntrevistasComponent,EncabezadosComponent ],
      imports: [HttpClientTestingModule],
      providers: [PreentrevistaService],
      schemas: [NO_ERRORS_SCHEMA]
    });

    pruebasService = TestBed.get(PreentrevistaService);
    fixture = TestBed.createComponent(EntrevistasComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
