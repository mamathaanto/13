import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTranInventoryComponent } from './in-tran-inventory.component';

describe('InTranInventoryComponent', () => {
  let component: InTranInventoryComponent;
  let fixture: ComponentFixture<InTranInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTranInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTranInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
