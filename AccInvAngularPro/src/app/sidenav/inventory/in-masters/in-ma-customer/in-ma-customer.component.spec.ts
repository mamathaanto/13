import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMaCustomerComponent } from './in-ma-customer.component';

describe('InMaCustomerComponent', () => {
  let component: InMaCustomerComponent;
  let fixture: ComponentFixture<InMaCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMaCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMaCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
