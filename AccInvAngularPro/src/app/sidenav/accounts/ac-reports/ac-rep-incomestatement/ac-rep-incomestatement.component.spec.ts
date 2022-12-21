import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRepIncomestatementComponent } from './ac-rep-incomestatement.component';

describe('AcRepIncomestatementComponent', () => {
  let component: AcRepIncomestatementComponent;
  let fixture: ComponentFixture<AcRepIncomestatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcRepIncomestatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRepIncomestatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
