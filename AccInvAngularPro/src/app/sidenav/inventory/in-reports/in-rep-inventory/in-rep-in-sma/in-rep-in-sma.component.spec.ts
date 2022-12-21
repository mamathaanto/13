import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepInSmaComponent } from './in-rep-in-sma.component';

describe('InRepInSmaComponent', () => {
  let component: InRepInSmaComponent;
  let fixture: ComponentFixture<InRepInSmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepInSmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepInSmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
