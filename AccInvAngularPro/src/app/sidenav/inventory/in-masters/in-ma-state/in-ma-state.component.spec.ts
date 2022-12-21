import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMaStateComponent } from './in-ma-state.component';

describe('InMaStateComponent', () => {
  let component: InMaStateComponent;
  let fixture: ComponentFixture<InMaStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMaStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMaStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
