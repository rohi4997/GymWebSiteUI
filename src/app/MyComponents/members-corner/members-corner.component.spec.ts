import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersCornerComponent } from './members-corner.component';

describe('MembersCornerComponent', () => {
  let component: MembersCornerComponent;
  let fixture: ComponentFixture<MembersCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
