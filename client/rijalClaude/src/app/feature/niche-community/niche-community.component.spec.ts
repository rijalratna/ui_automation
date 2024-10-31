import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicheCommunityComponent } from './niche-community.component';

describe('NicheCommunityComponent', () => {
  let component: NicheCommunityComponent;
  let fixture: ComponentFixture<NicheCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NicheCommunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NicheCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
