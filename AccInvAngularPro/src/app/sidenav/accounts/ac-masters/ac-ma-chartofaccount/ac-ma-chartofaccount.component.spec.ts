import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcMaChartofaccountComponent } from './ac-ma-chartofaccount.component';

describe('AcMaChartofaccountComponent', () => {
  let component: AcMaChartofaccountComponent;
  let fixture: ComponentFixture<AcMaChartofaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcMaChartofaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcMaChartofaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
