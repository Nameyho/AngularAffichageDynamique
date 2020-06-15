import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesCreationComponent } from './messages-creation.component';

describe('MessagesCreationComponent', () => {
  let component: MessagesCreationComponent;
  let fixture: ComponentFixture<MessagesCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
