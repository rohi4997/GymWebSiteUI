import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymfacilitiesComponent } from './gymfacilities.component';

describe('GymfacilitiesComponent', () => {
  let component: GymfacilitiesComponent;
  let fixture: ComponentFixture<GymfacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymfacilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymfacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
