import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTranPaymentsvoucherComponent } from './ac-tran-paymentsvoucher.component';

describe('AcTranPaymentsvoucherComponent', () => {
  let component: AcTranPaymentsvoucherComponent;
  let fixture: ComponentFixture<AcTranPaymentsvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcTranPaymentsvoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTranPaymentsvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
