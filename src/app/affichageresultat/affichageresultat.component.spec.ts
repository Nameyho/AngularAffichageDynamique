import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageresultatComponent } from './affichageresultat.component';

describe('AffichageComponent', () => {
  let component: AffichageresultatComponent;
  let fixture: ComponentFixture<AffichageresultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageresultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageresultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
