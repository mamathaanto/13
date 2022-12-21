import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChartofaccountComponent } from './add-edit-chartofaccount.component';

describe('AddEditChartofaccountComponent', () => {
  let component: AddEditChartofaccountComponent;
  let fixture: ComponentFixture<AddEditChartofaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChartofaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChartofaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
