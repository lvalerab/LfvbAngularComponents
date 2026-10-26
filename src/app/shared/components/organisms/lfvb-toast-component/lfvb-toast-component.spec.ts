import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbToastComponent } from './lfvb-toast-component';

describe('LfvbToastComponent', () => {
  let component: LfvbToastComponent;
  let fixture: ComponentFixture<LfvbToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbToastComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
