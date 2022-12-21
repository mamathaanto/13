import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMaMaterialComponent } from './in-ma-material.component';

describe('InMaMaterialComponent', () => {
  let component: InMaMaterialComponent;
  let fixture: ComponentFixture<InMaMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMaMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMaMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
