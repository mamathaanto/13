import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRepCustomersupplierarComponent } from './ac-rep-customersupplierar.component';

describe('AcRepCustomersupplierarComponent', () => {
  let component: AcRepCustomersupplierarComponent;
  let fixture: ComponentFixture<AcRepCustomersupplierarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcRepCustomersupplierarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRepCustomersupplierarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
