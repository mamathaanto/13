import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTranReceiptsvoucherComponent } from './ac-tran-receiptsvoucher.component';

describe('AcTranReceiptsvoucherComponent', () => {
  let component: AcTranReceiptsvoucherComponent;
  let fixture: ComponentFixture<AcTranReceiptsvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcTranReceiptsvoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTranReceiptsvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
