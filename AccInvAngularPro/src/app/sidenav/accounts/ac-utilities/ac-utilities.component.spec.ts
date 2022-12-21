import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcUtilitiesComponent } from './ac-utilities.component';

describe('AcUtilitiesComponent', () => {
  let component: AcUtilitiesComponent;
  let fixture: ComponentFixture<AcUtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcUtilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
