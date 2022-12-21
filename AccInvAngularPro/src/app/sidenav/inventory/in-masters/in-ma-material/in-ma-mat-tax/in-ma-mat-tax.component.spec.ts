import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMaMatTaxComponent } from './in-ma-mat-tax.component';

describe('InMaMatTaxComponent', () => {
  let component: InMaMatTaxComponent;
  let fixture: ComponentFixture<InMaMatTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMaMatTaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMaMatTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
