import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranPurchaseComponent } from './in-tran-purchase.component';

describe('InTranPurchaseComponent', () => {
  let component: InTranPurchaseComponent;
  let fixture: ComponentFixture<InTranPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
