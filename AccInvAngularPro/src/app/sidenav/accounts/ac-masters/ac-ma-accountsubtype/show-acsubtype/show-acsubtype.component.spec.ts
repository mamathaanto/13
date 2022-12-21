import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAcsubtypeComponent } from './show-acsubtype.component';

describe('ShowAcsubtypeComponent', () => {
  let component: ShowAcsubtypeComponent;
  let fixture: ComponentFixture<ShowAcsubtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAcsubtypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAcsubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
