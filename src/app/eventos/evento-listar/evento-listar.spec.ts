import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoListar } from './evento-listar';

describe('EventoListar', () => {
  let component: EventoListar;
  let fixture: ComponentFixture<EventoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoListar],
    }).compileComponents();

    fixture = TestBed.createComponent(EventoListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
