import { RouterTestingModule } from '@angular/router/testing';
import { ListarPruebasComponent } from './listar-pruebas.component';
import { Examen, Respuesta } from '../prueba/prueba';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { PruebasService } from './pruebas.service';
import { IonicModule } from '@ionic/angular';
import { EncabezadosComponent } from '../encabezados/encabezados.component';


describe('ListarPruebasComponent', () => {
  let component: ListarPruebasComponent;
  let fixture: ComponentFixture<ListarPruebasComponent>;
  let pruebasService: PruebasService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ListarPruebasComponent ,EncabezadosComponent],
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
      declarations: [ ListarPruebasComponent ,EncabezadosComponent],
      imports: [HttpClientTestingModule],
      providers: [PruebasService],
      schemas: [NO_ERRORS_SCHEMA]
    });

    pruebasService = TestBed.get(PruebasService);
    fixture = TestBed.createComponent(ListarPruebasComponent);
    component = fixture.componentInstance;

    // Add null check before accessing the object property
    pruebasService.getPruebas().subscribe((pruebas: Examen[]) => {
      component.misexamenes = pruebas;
    });


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should initialize misexamenes to an empty array', () => {
    expect(component.misexamenes).toEqual([]);
  });

  it('should add an examen to misexamenes when addExamen is called', () => {
    const examen: Examen = {
      "assignment_id": 4658842344357888,
      "focus": "Python",
      "rol": "Developer",
      "type": "Technical",
      "questions": [
        {
          "correct_answer": ["d"
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
      result: '',
      status: ''
    };
    component.misexamenes.push(examen);
    expect(component.misexamenes).toContain(examen);
  });

  it('should remove an examen from misexamenes when removeExamen is called', () => {
    const examen: Examen = {
      "assignment_id": 4658842344357888,
      "focus": "Python",
      "rol": "Developer",
      "type": "Technical",
      "questions": [
        {
          "correct_answer": ["d"
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
      result: '',
      status: ''
    };
    component.misexamenes = [examen];
    component.misexamenes.pop();
    expect(component.misexamenes).not.toContain(examen);
  });

  it('call function getPruebasWs', () => {
    component.getPruebasWs();
    expect(component.misexamenes).toBeDefined();
    expect(component.misexamenes).toEqual([]);
  });

  it('call function seleccionaExamen', () => {
    component.seleccionaExamen(0);
    expect(component.misexamenes).toBeDefined();
    expect(component.codExamen ).toEqual(0);
  });

  it('call function examenFinalizado', () => {
    let rta : Respuesta
    rta = {
      "selected_answer": ["d"],
      "correct_answer": ["d"],
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
    };
    let rtas: Respuesta[] = [rta];


    component.examenFinalizado(rtas);
    expect(component.misexamenes).toBeDefined();
    expect(component.codExamen ).toEqual(0);
  });



});
