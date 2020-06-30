import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndisponibiliteComponent } from './indisponibilite.component';

describe('IndisponibiliteComponent', () => {
  let component: IndisponibiliteComponent;
  let fixture: ComponentFixture<IndisponibiliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndisponibiliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
