import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepPurGrnComponent } from './in-rep-pur-grn.component';

describe('InRepPurGrnComponent', () => {
  let component: InRepPurGrnComponent;
  let fixture: ComponentFixture<InRepPurGrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepPurGrnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepPurGrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
