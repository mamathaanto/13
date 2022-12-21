import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMaMatItemmasterComponent } from './in-ma-mat-itemmaster.component';

describe('InMaMatItemmasterComponent', () => {
  let component: InMaMatItemmasterComponent;
  let fixture: ComponentFixture<InMaMatItemmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMaMatItemmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMaMatItemmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
