import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbButtonComponent } from './lfvb-button-component';

describe('LfvbButtonComponent', () => {
  let component: LfvbButtonComponent;
  let fixture: ComponentFixture<LfvbButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
