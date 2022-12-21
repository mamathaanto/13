import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcUtiApvComponent } from './ac-uti-apv.component';

describe('AcUtiApvComponent', () => {
  let component: AcUtiApvComponent;
  let fixture: ComponentFixture<AcUtiApvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcUtiApvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcUtiApvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
