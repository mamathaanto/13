import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRepProfitlossComponent } from './ac-rep-profitloss.component';

describe('AcRepProfitlossComponent', () => {
  let component: AcRepProfitlossComponent;
  let fixture: ComponentFixture<AcRepProfitlossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcRepProfitlossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRepProfitlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
