import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepSalSecondssalesComponent } from './in-rep-sal-secondssales.component';

describe('InRepSalSecondssalesComponent', () => {
  let component: InRepSalSecondssalesComponent;
  let fixture: ComponentFixture<InRepSalSecondssalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepSalSecondssalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepSalSecondssalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
