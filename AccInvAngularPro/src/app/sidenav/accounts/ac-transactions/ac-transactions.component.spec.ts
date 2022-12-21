import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTransactionsComponent } from './ac-transactions.component';

describe('AcTransactionsComponent', () => {
  let component: AcTransactionsComponent;
  let fixture: ComponentFixture<AcTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
