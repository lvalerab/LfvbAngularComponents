import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbIconComponent } from './lfvb-icon-component';

describe('LfvbIconComponent', () => {
  let component: LfvbIconComponent;
  let fixture: ComponentFixture<LfvbIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbIconComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
