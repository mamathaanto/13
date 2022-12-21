import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepInventoryComponent } from './in-rep-inventory.component';

describe('InRepInventoryComponent', () => {
  let component: InRepInventoryComponent;
  let fixture: ComponentFixture<InRepInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
