import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbDialogComponent } from './lfvb-dialog-component';

describe('LfvbDialogComponent', () => {
  let component: LfvbDialogComponent;
  let fixture: ComponentFixture<LfvbDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
