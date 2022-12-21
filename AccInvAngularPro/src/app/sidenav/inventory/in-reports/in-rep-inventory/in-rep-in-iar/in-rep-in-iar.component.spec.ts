import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepInIarComponent } from './in-rep-in-iar.component';

describe('InRepInIarComponent', () => {
  let component: InRepInIarComponent;
  let fixture: ComponentFixture<InRepInIarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepInIarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepInIarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
