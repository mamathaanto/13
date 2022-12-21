import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepSalSalesreturnComponent } from './in-rep-sal-salesreturn.component';

describe('InRepSalSalesreturnComponent', () => {
  let component: InRepSalSalesreturnComponent;
  let fixture: ComponentFixture<InRepSalSalesreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepSalSalesreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepSalSalesreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
