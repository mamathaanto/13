import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranPurPurchaseorderComponent } from './in-tran-pur-purchaseorder.component';

describe('InTranPurPurchaseorderComponent', () => {
  let component: InTranPurPurchaseorderComponent;
  let fixture: ComponentFixture<InTranPurPurchaseorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranPurPurchaseorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranPurPurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
