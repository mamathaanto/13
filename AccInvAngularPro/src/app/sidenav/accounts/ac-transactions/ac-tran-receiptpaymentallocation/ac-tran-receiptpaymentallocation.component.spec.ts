import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTranReceiptpaymentallocationComponent } from './ac-tran-receiptpaymentallocation.component';

describe('AcTranReceiptpaymentallocationComponent', () => {
  let component: AcTranReceiptpaymentallocationComponent;
  let fixture: ComponentFixture<AcTranReceiptpaymentallocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcTranReceiptpaymentallocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTranReceiptpaymentallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
