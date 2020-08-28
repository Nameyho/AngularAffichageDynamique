import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersFormcomponent} from './users-formcomponent';

describe('ElevesFormComponent', () => {
  let component: UsersFormcomponent;
  let fixture: ComponentFixture<UsersFormcomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFormcomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFormcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
