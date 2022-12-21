import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMaMatUnitComponent } from './in-ma-mat-unit.component';

describe('InMaMatUnitComponent', () => {
  let component: InMaMatUnitComponent;
  let fixture: ComponentFixture<InMaMatUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMaMatUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMaMatUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
