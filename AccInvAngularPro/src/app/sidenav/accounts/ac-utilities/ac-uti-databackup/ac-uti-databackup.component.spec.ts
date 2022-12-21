import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcUtiDatabackupComponent } from './ac-uti-databackup.component';

describe('AcUtiDatabackupComponent', () => {
  let component: AcUtiDatabackupComponent;
  let fixture: ComponentFixture<AcUtiDatabackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcUtiDatabackupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcUtiDatabackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
