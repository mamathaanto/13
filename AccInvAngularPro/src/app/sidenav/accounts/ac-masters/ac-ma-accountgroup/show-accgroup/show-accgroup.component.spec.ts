import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAccgroupComponent } from './show-accgroup.component';

describe('ShowAccgroupComponent', () => {
  let component: ShowAccgroupComponent;
  let fixture: ComponentFixture<ShowAccgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAccgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAccgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
