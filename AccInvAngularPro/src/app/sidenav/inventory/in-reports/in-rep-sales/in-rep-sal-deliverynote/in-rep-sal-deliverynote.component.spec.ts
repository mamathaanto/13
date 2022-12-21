import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepSalDeliverynoteComponent } from './in-rep-sal-deliverynote.component';

describe('InRepSalDeliverynoteComponent', () => {
  let component: InRepSalDeliverynoteComponent;
  let fixture: ComponentFixture<InRepSalDeliverynoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepSalDeliverynoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepSalDeliverynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
