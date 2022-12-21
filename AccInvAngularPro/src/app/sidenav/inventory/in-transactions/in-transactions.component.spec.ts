import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTransactionsComponent } from './in-transactions.component';

describe('InTransactionsComponent', () => {
  let component: InTransactionsComponent;
  let fixture: ComponentFixture<InTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
