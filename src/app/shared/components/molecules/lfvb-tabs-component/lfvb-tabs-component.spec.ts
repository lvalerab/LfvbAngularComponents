import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfvbTabsComponent } from './lfvb-tabs-component';

describe('LfvbTabsComponent', () => {
  let component: LfvbTabsComponent;
  let fixture: ComponentFixture<LfvbTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfvbTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LfvbTabsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
