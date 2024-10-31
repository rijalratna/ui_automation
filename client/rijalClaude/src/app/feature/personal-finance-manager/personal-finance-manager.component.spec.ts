import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalFinanceManagerComponent } from './personal-finance-manager.component';

describe('PersonalFinanceManagerComponent', () => {
  let component: PersonalFinanceManagerComponent;
  let fixture: ComponentFixture<PersonalFinanceManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalFinanceManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalFinanceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
