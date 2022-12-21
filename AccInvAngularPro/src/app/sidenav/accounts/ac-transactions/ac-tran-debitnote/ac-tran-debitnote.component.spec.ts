import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTranDebitnoteComponent } from './ac-tran-debitnote.component';

describe('AcTranDebitnoteComponent', () => {
  let component: AcTranDebitnoteComponent;
  let fixture: ComponentFixture<AcTranDebitnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcTranDebitnoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTranDebitnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
