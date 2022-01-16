import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymequipmentsComponent } from './gymequipments.component';

describe('GymequipmentsComponent', () => {
  let component: GymequipmentsComponent;
  let fixture: ComponentFixture<GymequipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymequipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymequipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
