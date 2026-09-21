import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbTabComponent } from './lfvb-tab-component';

describe('LfvbTabComponent', () => {
  let component: LfvbTabComponent;
  let fixture: ComponentFixture<LfvbTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbTabComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
