import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepPurPurchaseorderComponent } from './in-rep-pur-purchaseorder.component';

describe('InRepPurPurchaseorderComponent', () => {
  let component: InRepPurPurchaseorderComponent;
  let fixture: ComponentFixture<InRepPurPurchaseorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepPurPurchaseorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepPurPurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
