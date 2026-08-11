import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoinfantilComponent } from './elencoinfantil.component';

describe('ElencoinfantilComponent', () => {
  let component: ElencoinfantilComponent;
  let fixture: ComponentFixture<ElencoinfantilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElencoinfantilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElencoinfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
