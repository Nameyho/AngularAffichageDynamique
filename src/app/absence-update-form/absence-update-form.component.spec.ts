import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceUpdateFormComponent } from './absence-update-form.component';

describe('AbsenceUpdateFormComponent', () => {
  let component: AbsenceUpdateFormComponent;
  let fixture: ComponentFixture<AbsenceUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenceUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
