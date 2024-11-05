import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthFitnessTrackerComponent } from './health-fitness-tracker.component';

describe('HealthFitnessTrackerComponent', () => {
  let component: HealthFitnessTrackerComponent;
  let fixture: ComponentFixture<HealthFitnessTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthFitnessTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthFitnessTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
