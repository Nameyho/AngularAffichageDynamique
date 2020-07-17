import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutResultatComponent } from './ajout-resultat.component';

describe('AjoutResultatComponent', () => {
  let component: AjoutResultatComponent;
  let fixture: ComponentFixture<AjoutResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
