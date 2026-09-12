import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbLabelComponent } from './lfvb-label-component';

describe('LfvbLabelComponent', () => {
  let component: LfvbLabelComponent;
  let fixture: ComponentFixture<LfvbLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbLabelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
