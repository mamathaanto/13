import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActypeComponent } from './show-actype.component';

describe('ShowActypeComponent', () => {
  let component: ShowActypeComponent;
  let fixture: ComponentFixture<ShowActypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowActypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowActypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
