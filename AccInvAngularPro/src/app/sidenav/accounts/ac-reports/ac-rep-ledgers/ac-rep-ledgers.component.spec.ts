import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRepLedgersComponent } from './ac-rep-ledgers.component';

describe('AcRepLedgersComponent', () => {
  let component: AcRepLedgersComponent;
  let fixture: ComponentFixture<AcRepLedgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcRepLedgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRepLedgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
