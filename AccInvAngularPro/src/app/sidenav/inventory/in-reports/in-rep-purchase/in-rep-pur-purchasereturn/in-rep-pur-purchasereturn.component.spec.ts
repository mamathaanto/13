import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepPurPurchasereturnComponent } from './in-rep-pur-purchasereturn.component';

describe('InRepPurPurchasereturnComponent', () => {
  let component: InRepPurPurchasereturnComponent;
  let fixture: ComponentFixture<InRepPurPurchasereturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepPurPurchasereturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepPurPurchasereturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
