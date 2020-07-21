import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageabsenceComponent } from './affichageabsence.component';

describe('AffichageabsenceComponent', () => {
  let component: AffichageabsenceComponent;
  let fixture: ComponentFixture<AffichageabsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageabsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
