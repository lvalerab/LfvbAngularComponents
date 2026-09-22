import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbCardComponent } from './lfvb-card-component';

describe('LfvbCardComponent', () => {
  let component: LfvbCardComponent;
  let fixture: ComponentFixture<LfvbCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
