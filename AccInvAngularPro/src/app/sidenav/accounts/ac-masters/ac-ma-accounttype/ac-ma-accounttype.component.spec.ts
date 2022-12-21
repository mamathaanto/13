import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcMaAccounttypeComponent } from './ac-ma-accounttype.component';

describe('AcMaAccounttypeComponent', () => {
  let component: AcMaAccounttypeComponent;
  let fixture: ComponentFixture<AcMaAccounttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcMaAccounttypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcMaAccounttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
