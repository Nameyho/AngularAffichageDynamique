import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ElevesResultatsComponent} from './eleves-resultats.component';

describe('ElevesDetailsComponent', () => {
  let component: ElevesResultatsComponent;
  let fixture: ComponentFixture<ElevesResultatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevesResultatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevesResultatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
