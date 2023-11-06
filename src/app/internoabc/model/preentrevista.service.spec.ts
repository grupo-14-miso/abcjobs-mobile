import { TestBed, async, inject } from '@angular/core/testing';
/* tslint:disable:no-unused-variable */
import { PreentrevistaService } from './preentrevista.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PreentrevistaService', () => {
  let service: PreentrevistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PreentrevistaService],
      schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(PreentrevistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
