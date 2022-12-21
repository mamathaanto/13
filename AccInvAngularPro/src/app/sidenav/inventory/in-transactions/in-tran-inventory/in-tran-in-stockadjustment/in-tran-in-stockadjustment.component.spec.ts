import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranInStockadjustmentComponent } from './in-tran-in-stockadjustment.component';

describe('InTranInStockadjustmentComponent', () => {
  let component: InTranInStockadjustmentComponent;
  let fixture: ComponentFixture<InTranInStockadjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranInStockadjustmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranInStockadjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
