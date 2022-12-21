import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranSalesComponent } from './in-tran-sales.component';

describe('InTranSalesComponent', () => {
  let component: InTranSalesComponent;
  let fixture: ComponentFixture<InTranSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
