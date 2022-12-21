import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepInStockregisterComponent } from './in-rep-in-stockregister.component';

describe('InRepInStockregisterComponent', () => {
  let component: InRepInStockregisterComponent;
  let fixture: ComponentFixture<InRepInStockregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepInStockregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepInStockregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
