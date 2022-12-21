import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAccgroupComponent } from './add-edit-accgroup.component';

describe('AddEditAccgroupComponent', () => {
  let component: AddEditAccgroupComponent;
  let fixture: ComponentFixture<AddEditAccgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAccgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAccgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
