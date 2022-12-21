import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranSalSalesreturnComponent } from './in-tran-sal-salesreturn.component';

describe('InTranSalSalesreturnComponent', () => {
  let component: InTranSalSalesreturnComponent;
  let fixture: ComponentFixture<InTranSalSalesreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranSalSalesreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranSalSalesreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
