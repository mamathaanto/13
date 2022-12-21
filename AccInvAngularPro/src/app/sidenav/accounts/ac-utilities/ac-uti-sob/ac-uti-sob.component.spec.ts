import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcUtiSobComponent } from './ac-uti-sob.component';

describe('AcUtiSobComponent', () => {
  let component: AcUtiSobComponent;
  let fixture: ComponentFixture<AcUtiSobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcUtiSobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcUtiSobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
