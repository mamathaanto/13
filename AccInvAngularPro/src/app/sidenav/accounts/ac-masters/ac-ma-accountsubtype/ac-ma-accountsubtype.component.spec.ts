import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcMaAccountsubtypeComponent } from './ac-ma-accountsubtype.component';

describe('AcMaAccountsubtypeComponent', () => {
  let component: AcMaAccountsubtypeComponent;
  let fixture: ComponentFixture<AcMaAccountsubtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcMaAccountsubtypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcMaAccountsubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
