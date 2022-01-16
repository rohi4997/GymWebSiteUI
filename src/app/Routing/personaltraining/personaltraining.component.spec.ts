import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaltrainingComponent } from './personaltraining.component';

describe('PersonaltrainingComponent', () => {
  let component: PersonaltrainingComponent;
  let fixture: ComponentFixture<PersonaltrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaltrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaltrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
