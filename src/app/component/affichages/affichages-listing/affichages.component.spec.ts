import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AffichagesComponent} from './affichages.component';

describe('AffichagesComponent', () => {
  let component: AffichagesComponent;
  let fixture: ComponentFixture<AffichagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
