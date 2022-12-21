import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranSalSecondssalesComponent } from './in-tran-sal-secondssales.component';

describe('InTranSalSecondssalesComponent', () => {
  let component: InTranSalSecondssalesComponent;
  let fixture: ComponentFixture<InTranSalSecondssalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranSalSecondssalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranSalSecondssalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
