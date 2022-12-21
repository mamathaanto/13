import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepSalesComponent } from './in-rep-sales.component';

describe('InRepSalesComponent', () => {
  let component: InRepSalesComponent;
  let fixture: ComponentFixture<InRepSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
