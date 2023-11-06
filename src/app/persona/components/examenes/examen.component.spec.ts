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
import { EncabezadosComponent } from '../encabezados/encabezados.component';


describe('EXAMEN', () => {
  let component: ExamenComponent;
  let fixture: ComponentFixture<ExamenComponent>;
  let pruebasService: PruebasService;
  let misexamenes: Examen[];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ExamenComponent ],
      imports: [ RouterTestingModule ,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        IonicModule,
      ],
      providers: [ PruebasService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
  });

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ ExamenComponent ],
      imports: [HttpClientTestingModule],
      providers: [PruebasService],
      schemas: [NO_ERRORS_SCHEMA]
    });

    pruebasService = TestBed.get(PruebasService);
    fixture = TestBed.createComponent(ExamenComponent);
    component = fixture.componentInstance;

    // Add null check before accessing the object property
    pruebasService.getPruebas().subscribe((pruebas: Examen[]) => {
      misexamenes = pruebas;
    });

    component.miexamen = {
      assignment_id: 4658842344357888,
      focus: "Python",
      rol: "Developer",
      type: "Technical",
      questions: [
          {"correct_answer": ["d"
            ],
            "description": "What is the difference between a list and a tuple in Python?",
            "answers": [
              {
                "a": "A class is a template for creating objects, and an object is an instance of a class."
              },
              {
                "b": "A class is a blueprint for creating objects, and an object is a physical manifestation of a class."
              },
              {
                "c": "A class is a set of instructions for creating objects, and an object is a concrete representation of a class."
              },
              {
                "d": "A class is a blueprint for creating objects, and an object is a logical manifestation of a class."
              }
            ]
          }
      ],
      result: "a",
      status: "b"
    };

    component.totalPreguntas = 1;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('inicializar', () => {

    expect(component.totalPreguntas ).toEqual(1);
  });



  it('call function traePregunta', () => {
    component.traePregunta ();
    expect(component.totalPreguntas ).toEqual(1);
  });

  it('traeRtas', () => {
    component.traeRtas ();
    expect(component.respuestas.length ).toEqual(0);
  });



  it('call function finalizar', () => {
    component.finalizar();
    expect(component.isSubmitted).toBeTruthy();
  });


  it('call function onSubmit', () => {
    component.onSubmit();
    expect(component.isSubmitted);

  });



});
