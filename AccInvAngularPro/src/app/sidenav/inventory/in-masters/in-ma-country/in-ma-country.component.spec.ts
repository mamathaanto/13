import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMaCountryComponent } from './in-ma-country.component';

describe('InMaCountryComponent', () => {
  let component: InMaCountryComponent;
  let fixture: ComponentFixture<InMaCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMaCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMaCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
