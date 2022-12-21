import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranOffDismantlebundleComponent } from './in-tran-off-dismantlebundle.component';

describe('InTranOffDismantlebundleComponent', () => {
  let component: InTranOffDismantlebundleComponent;
  let fixture: ComponentFixture<InTranOffDismantlebundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranOffDismantlebundleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranOffDismantlebundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
