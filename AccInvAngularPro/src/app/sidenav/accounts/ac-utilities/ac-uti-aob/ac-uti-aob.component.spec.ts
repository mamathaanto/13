import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcUtiAobComponent } from './ac-uti-aob.component';

describe('AcUtiAobComponent', () => {
  let component: AcUtiAobComponent;
  let fixture: ComponentFixture<AcUtiAobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcUtiAobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcUtiAobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
