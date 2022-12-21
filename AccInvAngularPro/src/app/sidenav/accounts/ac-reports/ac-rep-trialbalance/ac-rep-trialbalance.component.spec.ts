import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRepTrialbalanceComponent } from './ac-rep-trialbalance.component';

describe('AcRepTrialbalanceComponent', () => {
  let component: AcRepTrialbalanceComponent;
  let fixture: ComponentFixture<AcRepTrialbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcRepTrialbalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRepTrialbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
