import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbMenuItemComponent } from './lfvb-menu-item-component';

describe('LfvbMenuItemComponent', () => {
  let component: LfvbMenuItemComponent;
  let fixture: ComponentFixture<LfvbMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbMenuItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbMenuItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
