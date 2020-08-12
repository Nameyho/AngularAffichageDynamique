import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionsAffichagesComponent } from './gestions-affichages.component';

describe('GestionsAffichagesComponent', () => {
  let component: GestionsAffichagesComponent;
  let fixture: ComponentFixture<GestionsAffichagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionsAffichagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionsAffichagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
