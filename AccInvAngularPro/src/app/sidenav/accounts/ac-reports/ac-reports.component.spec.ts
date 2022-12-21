import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcReportsComponent } from './ac-reports.component';

describe('AcReportsComponent', () => {
  let component: AcReportsComponent;
  let fixture: ComponentFixture<AcReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
