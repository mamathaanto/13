import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcMaAccountgroupComponent } from './ac-ma-accountgroup.component';

describe('AcMaAccountgroupComponent', () => {
  let component: AcMaAccountgroupComponent;
  let fixture: ComponentFixture<AcMaAccountgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcMaAccountgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcMaAccountgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
