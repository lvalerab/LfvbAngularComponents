import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbFormComponent } from './lfvb-form-component';

describe('LfvbFormComponent', () => {
  let component: LfvbFormComponent;
  let fixture: ComponentFixture<LfvbFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
