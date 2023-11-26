import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverpruebaComponent } from './resolverprueba.component';

describe('ResolverpruebaComponent', () => {
  let component: ResolverpruebaComponent;
  let fixture: ComponentFixture<ResolverpruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverpruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolverpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
