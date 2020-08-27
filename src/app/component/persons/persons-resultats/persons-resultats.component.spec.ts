import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonsResultatsComponent} from './persons-resultats.component';

describe('ElevesDetailsComponent', () => {
  let component: PersonsResultatsComponent;
  let fixture: ComponentFixture<PersonsResultatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsResultatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsResultatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
