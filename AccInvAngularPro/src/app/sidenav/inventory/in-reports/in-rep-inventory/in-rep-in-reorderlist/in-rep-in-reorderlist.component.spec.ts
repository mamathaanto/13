import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepInReorderlistComponent } from './in-rep-in-reorderlist.component';

describe('InRepInReorderlistComponent', () => {
  let component: InRepInReorderlistComponent;
  let fixture: ComponentFixture<InRepInReorderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepInReorderlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepInReorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
