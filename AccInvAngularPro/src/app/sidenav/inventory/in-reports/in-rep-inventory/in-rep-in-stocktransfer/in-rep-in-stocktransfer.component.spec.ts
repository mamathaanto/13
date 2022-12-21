import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepInStocktransferComponent } from './in-rep-in-stocktransfer.component';

describe('InRepInStocktransferComponent', () => {
  let component: InRepInStocktransferComponent;
  let fixture: ComponentFixture<InRepInStocktransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepInStocktransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepInStocktransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
