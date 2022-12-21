import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRepPettycashComponent } from './ac-rep-pettycash.component';

describe('AcRepPettycashComponent', () => {
  let component: AcRepPettycashComponent;
  let fixture: ComponentFixture<AcRepPettycashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcRepPettycashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRepPettycashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
