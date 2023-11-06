/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PruebasService } from './pruebas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EncabezadosComponent } from '../encabezados/encabezados.component';
describe('Service: Pruebas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PruebasService],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should ...', inject([PruebasService], (service: PruebasService) => {
    expect(service).toBeTruthy();
  }));
});
