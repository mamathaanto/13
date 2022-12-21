import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTranCreditnoteComponent } from './ac-tran-creditnote.component';

describe('AcTranCreditnoteComponent', () => {
  let component: AcTranCreditnoteComponent;
  let fixture: ComponentFixture<AcTranCreditnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcTranCreditnoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTranCreditnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
