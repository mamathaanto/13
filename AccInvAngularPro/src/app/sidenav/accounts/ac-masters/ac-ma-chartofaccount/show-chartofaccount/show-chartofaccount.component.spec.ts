import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChartofaccountComponent } from './show-chartofaccount.component';

describe('ShowChartofaccountComponent', () => {
  let component: ShowChartofaccountComponent;
  let fixture: ComponentFixture<ShowChartofaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowChartofaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowChartofaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
