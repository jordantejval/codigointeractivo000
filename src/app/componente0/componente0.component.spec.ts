import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente0Component } from './componente0.component';

describe('Componente0Component', () => {
  let component: Componente0Component;
  let fixture: ComponentFixture<Componente0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
