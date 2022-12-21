import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcMastersComponent } from './ac-masters.component';

describe('AcMastersComponent', () => {
  let component: AcMastersComponent;
  let fixture: ComponentFixture<AcMastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcMastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
