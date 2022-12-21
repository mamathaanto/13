import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InReportsComponent } from './in-reports.component';

describe('InReportsComponent', () => {
  let component: InReportsComponent;
  let fixture: ComponentFixture<InReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
