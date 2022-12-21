import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepSalSalesComponent } from './in-rep-sal-sales.component';

describe('InRepSalSalesComponent', () => {
  let component: InRepSalSalesComponent;
  let fixture: ComponentFixture<InRepSalSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepSalSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepSalSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
