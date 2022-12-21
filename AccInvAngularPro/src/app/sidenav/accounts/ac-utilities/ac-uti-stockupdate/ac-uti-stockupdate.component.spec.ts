import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcUtiStockupdateComponent } from './ac-uti-stockupdate.component';

describe('AcUtiStockupdateComponent', () => {
  let component: AcUtiStockupdateComponent;
  let fixture: ComponentFixture<AcUtiStockupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcUtiStockupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcUtiStockupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
