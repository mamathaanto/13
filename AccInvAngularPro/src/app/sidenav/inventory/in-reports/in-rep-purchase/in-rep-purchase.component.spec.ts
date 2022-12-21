import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepPurchaseComponent } from './in-rep-purchase.component';

describe('InRepPurchaseComponent', () => {
  let component: InRepPurchaseComponent;
  let fixture: ComponentFixture<InRepPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
