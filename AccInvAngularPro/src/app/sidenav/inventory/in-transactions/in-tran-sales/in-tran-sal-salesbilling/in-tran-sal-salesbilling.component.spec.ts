import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranSalSalesbillingComponent } from './in-tran-sal-salesbilling.component';

describe('InTranSalSalesbillingComponent', () => {
  let component: InTranSalSalesbillingComponent;
  let fixture: ComponentFixture<InTranSalSalesbillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranSalSalesbillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranSalSalesbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
