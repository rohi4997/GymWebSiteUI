import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplimentsComponent } from './suppliments.component';

describe('SupplimentsComponent', () => {
  let component: SupplimentsComponent;
  let fixture: ComponentFixture<SupplimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplimentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
