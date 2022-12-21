import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMaMatCategoryComponent } from './in-ma-mat-category.component';

describe('InMaMatCategoryComponent', () => {
  let component: InMaMatCategoryComponent;
  let fixture: ComponentFixture<InMaMatCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMaMatCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMaMatCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
