import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosComponentem } from './resultadosem.component';

describe('ResultadosComponent', () => {
  let component: ResultadosComponentem;
  let fixture: ComponentFixture<ResultadosComponentem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosComponentem ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosComponentem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
