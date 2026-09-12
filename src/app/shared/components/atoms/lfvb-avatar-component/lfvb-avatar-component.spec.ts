import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbAvatarComponent } from './lfvb-avatar-component';

describe('LfvbAvatarComponent', () => {
  let component: LfvbAvatarComponent;
  let fixture: ComponentFixture<LfvbAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbAvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbAvatarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
