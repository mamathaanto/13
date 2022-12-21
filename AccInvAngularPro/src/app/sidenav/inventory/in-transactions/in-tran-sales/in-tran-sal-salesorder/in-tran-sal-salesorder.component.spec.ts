import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranSalSalesorderComponent } from './in-tran-sal-salesorder.component';

describe('InTranSalSalesorderComponent', () => {
  let component: InTranSalSalesorderComponent;
  let fixture: ComponentFixture<InTranSalSalesorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranSalSalesorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranSalSalesorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
