import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcUtiYearendprocessComponent } from './ac-uti-yearendprocess.component';

describe('AcUtiYearendprocessComponent', () => {
  let component: AcUtiYearendprocessComponent;
  let fixture: ComponentFixture<AcUtiYearendprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcUtiYearendprocessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcUtiYearendprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
