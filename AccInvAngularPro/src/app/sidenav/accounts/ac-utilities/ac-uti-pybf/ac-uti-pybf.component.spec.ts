import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcUtiPybfComponent } from './ac-uti-pybf.component';

describe('AcUtiPybfComponent', () => {
  let component: AcUtiPybfComponent;
  let fixture: ComponentFixture<AcUtiPybfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcUtiPybfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcUtiPybfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
