import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRepInDamagestockComponent } from './in-rep-in-damagestock.component';

describe('InRepInDamagestockComponent', () => {
  let component: InRepInDamagestockComponent;
  let fixture: ComponentFixture<InRepInDamagestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InRepInDamagestockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InRepInDamagestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
