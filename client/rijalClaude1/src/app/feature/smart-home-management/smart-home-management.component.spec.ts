import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartHomeManagementComponent } from './smart-home-management.component';

describe('SmartHomeManagementComponent', () => {
  let component: SmartHomeManagementComponent;
  let fixture: ComponentFixture<SmartHomeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartHomeManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartHomeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
