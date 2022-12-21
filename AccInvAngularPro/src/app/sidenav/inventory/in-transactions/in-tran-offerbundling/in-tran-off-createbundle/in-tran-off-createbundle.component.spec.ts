import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranOffCreatebundleComponent } from './in-tran-off-createbundle.component';

describe('InTranOffCreatebundleComponent', () => {
  let component: InTranOffCreatebundleComponent;
  let fixture: ComponentFixture<InTranOffCreatebundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranOffCreatebundleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranOffCreatebundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
