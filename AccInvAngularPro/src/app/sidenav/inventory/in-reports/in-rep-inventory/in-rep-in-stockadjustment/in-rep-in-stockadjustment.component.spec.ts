import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepInStockadjustmentComponent } from './in-rep-in-stockadjustment.component';

describe('InRepInStockadjustmentComponent', () => {
  let component: InRepInStockadjustmentComponent;
  let fixture: ComponentFixture<InRepInStockadjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepInStockadjustmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepInStockadjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
