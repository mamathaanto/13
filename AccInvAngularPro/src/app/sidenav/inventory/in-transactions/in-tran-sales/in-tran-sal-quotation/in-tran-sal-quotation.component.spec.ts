import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranSalQuotationComponent } from './in-tran-sal-quotation.component';

describe('InTranSalQuotationComponent', () => {
  let component: InTranSalQuotationComponent;
  let fixture: ComponentFixture<InTranSalQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranSalQuotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranSalQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
