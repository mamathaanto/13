import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranSalDeliverynoteComponent } from './in-tran-sal-deliverynote.component';

describe('InTranSalDeliverynoteComponent', () => {
  let component: InTranSalDeliverynoteComponent;
  let fixture: ComponentFixture<InTranSalDeliverynoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranSalDeliverynoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranSalDeliverynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
