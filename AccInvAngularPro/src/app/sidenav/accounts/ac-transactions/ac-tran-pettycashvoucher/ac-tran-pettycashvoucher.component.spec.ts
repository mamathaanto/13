import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTranPettycashvoucherComponent } from './ac-tran-pettycashvoucher.component';

describe('AcTranPettycashvoucherComponent', () => {
  let component: AcTranPettycashvoucherComponent;
  let fixture: ComponentFixture<AcTranPettycashvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcTranPettycashvoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTranPettycashvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
