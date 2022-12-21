import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranOfferbundlingComponent } from './in-tran-offerbundling.component';

describe('InTranOfferbundlingComponent', () => {
  let component: InTranOfferbundlingComponent;
  let fixture: ComponentFixture<InTranOfferbundlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranOfferbundlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranOfferbundlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
