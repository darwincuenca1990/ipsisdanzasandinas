import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasPresentaciones } from './nuestras-presentaciones';

describe('NuestrasPresentaciones', () => {
  let component: NuestrasPresentaciones;
  let fixture: ComponentFixture<NuestrasPresentaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrasPresentaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrasPresentaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
