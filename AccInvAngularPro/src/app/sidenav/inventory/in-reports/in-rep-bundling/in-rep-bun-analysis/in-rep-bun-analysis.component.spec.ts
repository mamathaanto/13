import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepBunAnalysisComponent } from './in-rep-bun-analysis.component';

describe('InRepBunAnalysisComponent', () => {
  let component: InRepBunAnalysisComponent;
  let fixture: ComponentFixture<InRepBunAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepBunAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepBunAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
