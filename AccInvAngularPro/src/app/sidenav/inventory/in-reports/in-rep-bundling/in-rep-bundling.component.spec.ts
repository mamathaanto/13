import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepBundlingComponent } from './in-rep-bundling.component';

describe('InRepBundlingComponent', () => {
  let component: InRepBundlingComponent;
  let fixture: ComponentFixture<InRepBundlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepBundlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepBundlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
