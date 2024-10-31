import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEngagementComponent } from './social-engagement.component';

describe('SocialEngagementComponent', () => {
  let component: SocialEngagementComponent;
  let fixture: ComponentFixture<SocialEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialEngagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
