import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbFormItemComponent } from './lfvb-form-item-component';

describe('LfvbFormItemComponent', () => {
  let component: LfvbFormItemComponent;
  let fixture: ComponentFixture<LfvbFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbFormItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbFormItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
