import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMastersComponent } from './in-masters.component';

describe('InMastersComponent', () => {
  let component: InMastersComponent;
  let fixture: ComponentFixture<InMastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
