import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTranPdcstatusupdationComponent } from './ac-tran-pdcstatusupdation.component';

describe('AcTranPdcstatusupdationComponent', () => {
  let component: AcTranPdcstatusupdationComponent;
  let fixture: ComponentFixture<AcTranPdcstatusupdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcTranPdcstatusupdationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTranPdcstatusupdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
