import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranPurGrnComponent } from './in-tran-pur-grn.component';

describe('InTranPurGrnComponent', () => {
  let component: InTranPurGrnComponent;
  let fixture: ComponentFixture<InTranPurGrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranPurGrnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranPurGrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
