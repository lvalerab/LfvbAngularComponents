import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbTableComponent } from './lfvb-table-component';

describe('LfvbTableComponent', () => {
  let component: LfvbTableComponent;
  let fixture: ComponentFixture<LfvbTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
