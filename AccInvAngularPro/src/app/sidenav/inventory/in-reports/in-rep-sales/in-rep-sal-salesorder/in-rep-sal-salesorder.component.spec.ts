import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepSalSalesorderComponent } from './in-rep-sal-salesorder.component';

describe('InRepSalSalesorderComponent', () => {
  let component: InRepSalSalesorderComponent;
  let fixture: ComponentFixture<InRepSalSalesorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepSalSalesorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepSalSalesorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
