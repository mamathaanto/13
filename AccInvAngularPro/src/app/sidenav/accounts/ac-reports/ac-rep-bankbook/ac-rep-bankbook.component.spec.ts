import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRepBankbookComponent } from './ac-rep-bankbook.component';

describe('AcRepBankbookComponent', () => {
  let component: AcRepBankbookComponent;
  let fixture: ComponentFixture<AcRepBankbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcRepBankbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRepBankbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
