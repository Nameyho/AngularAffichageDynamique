import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AffichagemessageComponent} from './affichagemessage.component';

describe('AffichagemessageComponent', () => {
  let component: AffichagemessageComponent;
  let fixture: ComponentFixture<AffichagemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichagemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichagemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
