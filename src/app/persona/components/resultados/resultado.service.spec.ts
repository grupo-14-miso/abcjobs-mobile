/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResultadoService } from './resultado.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Service: Resultado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultadoService],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([ResultadoService], (service: ResultadoService) => {
    expect(service).toBeTruthy();
  }));
});
