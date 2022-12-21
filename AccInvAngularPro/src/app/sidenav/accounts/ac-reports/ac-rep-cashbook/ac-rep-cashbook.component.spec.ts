import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRepCashbookComponent } from './ac-rep-cashbook.component';

describe('AcRepCashbookComponent', () => {
  let component: AcRepCashbookComponent;
  let fixture: ComponentFixture<AcRepCashbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcRepCashbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRepCashbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
