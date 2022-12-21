import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRepBalancesheetComponent } from './ac-rep-balancesheet.component';

describe('AcRepBalancesheetComponent', () => {
  let component: AcRepBalancesheetComponent;
  let fixture: ComponentFixture<AcRepBalancesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcRepBalancesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRepBalancesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
