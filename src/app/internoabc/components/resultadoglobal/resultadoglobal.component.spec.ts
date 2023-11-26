import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoglobalComponent } from './resultadoglobal.component';

describe('ResultadoglobalComponent', () => {
  let component: ResultadoglobalComponent;
  let fixture: ComponentFixture<ResultadoglobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoglobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
