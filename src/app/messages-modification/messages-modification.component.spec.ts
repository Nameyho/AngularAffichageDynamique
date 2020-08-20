import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessagesModificationComponent} from './messages-modification.component';

describe('MessagesModificationComponent', () => {
  let component: MessagesModificationComponent;
  let fixture: ComponentFixture<MessagesModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
