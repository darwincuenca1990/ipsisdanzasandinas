import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoprincipalComponent } from './elencoprincipal.component';

describe('ElencoprincipalComponent', () => {
  let component: ElencoprincipalComponent;
  let fixture: ComponentFixture<ElencoprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElencoprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElencoprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
