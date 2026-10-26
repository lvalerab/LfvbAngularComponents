import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbModalComponent } from './lfvb-modal-component';

describe('LfvbModalComponent', () => {
  let component: LfvbModalComponent;
  let fixture: ComponentFixture<LfvbModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
