import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranInStocktransferComponent } from './in-tran-in-stocktransfer.component';

describe('InTranInStocktransferComponent', () => {
  let component: InTranInStocktransferComponent;
  let fixture: ComponentFixture<InTranInStocktransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranInStocktransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranInStocktransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
