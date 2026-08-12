import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosEventos } from './proximos-eventos';

describe('ProximosEventos', () => {
  let component: ProximosEventos;
  let fixture: ComponentFixture<ProximosEventos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProximosEventos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximosEventos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
