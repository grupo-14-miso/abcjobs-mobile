import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaglobalComponent } from './consultaglobal.component';

describe('ConsultaglobalComponent', () => {
  let component: ConsultaglobalComponent;
  let fixture: ComponentFixture<ConsultaglobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaglobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
