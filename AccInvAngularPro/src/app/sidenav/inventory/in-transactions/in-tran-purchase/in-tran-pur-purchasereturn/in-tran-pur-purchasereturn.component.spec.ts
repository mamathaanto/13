import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranPurPurchasereturnComponent } from './in-tran-pur-purchasereturn.component';

describe('InTranPurPurchasereturnComponent', () => {
  let component: InTranPurPurchasereturnComponent;
  let fixture: ComponentFixture<InTranPurPurchasereturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranPurPurchasereturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranPurPurchasereturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
