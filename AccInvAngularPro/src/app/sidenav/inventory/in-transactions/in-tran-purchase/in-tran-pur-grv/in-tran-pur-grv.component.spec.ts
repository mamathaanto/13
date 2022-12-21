import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranPurGrvComponent } from './in-tran-pur-grv.component';

describe('InTranPurGrvComponent', () => {
  let component: InTranPurGrvComponent;
  let fixture: ComponentFixture<InTranPurGrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranPurGrvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranPurGrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
