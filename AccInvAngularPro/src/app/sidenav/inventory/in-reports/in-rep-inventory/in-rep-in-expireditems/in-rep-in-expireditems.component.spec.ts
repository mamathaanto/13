import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepInExpireditemsComponent } from './in-rep-in-expireditems.component';

describe('InRepInExpireditemsComponent', () => {
  let component: InRepInExpireditemsComponent;
  let fixture: ComponentFixture<InRepInExpireditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepInExpireditemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepInExpireditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
