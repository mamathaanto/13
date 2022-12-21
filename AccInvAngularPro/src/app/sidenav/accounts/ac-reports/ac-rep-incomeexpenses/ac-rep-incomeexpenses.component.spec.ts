import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRepIncomeexpensesComponent } from './ac-rep-incomeexpenses.component';

describe('AcRepIncomeexpensesComponent', () => {
  let component: AcRepIncomeexpensesComponent;
  let fixture: ComponentFixture<AcRepIncomeexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcRepIncomeexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRepIncomeexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
