import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevesDetailsComponent } from './eleves-details.component';

describe('ElevesDetailsComponent', () => {
  let component: ElevesDetailsComponent;
  let fixture: ComponentFixture<ElevesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
