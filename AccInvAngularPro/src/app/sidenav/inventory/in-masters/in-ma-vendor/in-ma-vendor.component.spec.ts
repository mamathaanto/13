import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMaVendorComponent } from './in-ma-vendor.component';

describe('InMaVendorComponent', () => {
  let component: InMaVendorComponent;
  let fixture: ComponentFixture<InMaVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMaVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMaVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
