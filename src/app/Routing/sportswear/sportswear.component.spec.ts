import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportswearComponent } from './sportswear.component';

describe('SportswearComponent', () => {
  let component: SportswearComponent;
  let fixture: ComponentFixture<SportswearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportswearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
