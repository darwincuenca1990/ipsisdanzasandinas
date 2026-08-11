import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencomasterComponent } from './elencomaster.component';

describe('ElencomasterComponent', () => {
  let component: ElencomasterComponent;
  let fixture: ComponentFixture<ElencomasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElencomasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElencomasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
