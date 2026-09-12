import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbInputComponent } from './lfvb-input-component';

describe('LfvbInputComponent', () => {
  let component: LfvbInputComponent;
  let fixture: ComponentFixture<LfvbInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbInputComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
