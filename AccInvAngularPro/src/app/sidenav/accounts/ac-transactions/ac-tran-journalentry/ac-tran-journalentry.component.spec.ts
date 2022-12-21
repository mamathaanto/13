import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTranJournalentryComponent } from './ac-tran-journalentry.component';

describe('AcTranJournalentryComponent', () => {
  let component: AcTranJournalentryComponent;
  let fixture: ComponentFixture<AcTranJournalentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcTranJournalentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTranJournalentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
