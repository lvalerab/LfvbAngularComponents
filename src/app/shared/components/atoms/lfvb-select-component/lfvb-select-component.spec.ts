import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbSelectComponent } from './lfvb-select-component';

describe('LfvbSelectComponent', () => {
  let component: LfvbSelectComponent;
  let fixture: ComponentFixture<LfvbSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbSelectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
