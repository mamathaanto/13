import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTranContraentryComponent } from './ac-tran-contraentry.component';

describe('AcTranContraentryComponent', () => {
  let component: AcTranContraentryComponent;
  let fixture: ComponentFixture<AcTranContraentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcTranContraentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTranContraentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
