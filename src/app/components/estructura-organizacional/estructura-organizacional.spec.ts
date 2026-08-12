import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraOrganizacional } from './estructura-organizacional';

describe('EstructuraOrganizacional', () => {
  let component: EstructuraOrganizacional;
  let fixture: ComponentFixture<EstructuraOrganizacional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstructuraOrganizacional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstructuraOrganizacional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
