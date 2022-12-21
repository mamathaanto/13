import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranInDswComponent } from './in-tran-in-dsw.component';

describe('InTranInDswComponent', () => {
  let component: InTranInDswComponent;
  let fixture: ComponentFixture<InTranInDswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranInDswComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranInDswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
