import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepBunBundlesalesComponent } from './in-rep-bun-bundlesales.component';

describe('InRepBunBundlesalesComponent', () => {
  let component: InRepBunBundlesalesComponent;
  let fixture: ComponentFixture<InRepBunBundlesalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepBunBundlesalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepBunBundlesalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
