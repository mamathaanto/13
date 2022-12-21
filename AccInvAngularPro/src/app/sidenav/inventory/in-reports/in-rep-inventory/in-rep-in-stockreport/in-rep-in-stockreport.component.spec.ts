import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepInStockreportComponent } from './in-rep-in-stockreport.component';

describe('InRepInStockreportComponent', () => {
  let component: InRepInStockreportComponent;
  let fixture: ComponentFixture<InRepInStockreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepInStockreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepInStockreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
