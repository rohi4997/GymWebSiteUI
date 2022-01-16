import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymfeeComponent } from './gymfee.component';

describe('GymfeeComponent', () => {
  let component: GymfeeComponent;
  let fixture: ComponentFixture<GymfeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymfeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
