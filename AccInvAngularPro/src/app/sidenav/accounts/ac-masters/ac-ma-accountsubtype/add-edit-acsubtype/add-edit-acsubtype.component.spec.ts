import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAcsubtypeComponent } from './add-edit-acsubtype.component';

describe('AddEditAcsubtypeComponent', () => {
  let component: AddEditAcsubtypeComponent;
  let fixture: ComponentFixture<AddEditAcsubtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAcsubtypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAcsubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
