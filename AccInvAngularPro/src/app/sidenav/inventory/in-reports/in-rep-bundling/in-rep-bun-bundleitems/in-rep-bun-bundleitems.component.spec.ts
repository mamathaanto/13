import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepBunBundleitemsComponent } from './in-rep-bun-bundleitems.component';

describe('InRepBunBundleitemsComponent', () => {
  let component: InRepBunBundleitemsComponent;
  let fixture: ComponentFixture<InRepBunBundleitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepBunBundleitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepBunBundleitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
