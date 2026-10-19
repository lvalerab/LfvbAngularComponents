import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbMenuComponent } from './lfvb-menu-component';

describe('LfvbMenuComponent', () => {
  let component: LfvbMenuComponent;
  let fixture: ComponentFixture<LfvbMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbMenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
