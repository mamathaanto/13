import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTranBankreconciliationComponent } from './ac-tran-bankreconciliation.component';

describe('AcTranBankreconciliationComponent', () => {
  let component: AcTranBankreconciliationComponent;
  let fixture: ComponentFixture<AcTranBankreconciliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcTranBankreconciliationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTranBankreconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
