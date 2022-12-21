import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranOffBundlingComponent } from './in-tran-off-bundling.component';

describe('InTranOffBundlingComponent', () => {
  let component: InTranOffBundlingComponent;
  let fixture: ComponentFixture<InTranOffBundlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranOffBundlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranOffBundlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
