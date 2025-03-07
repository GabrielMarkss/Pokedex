import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityDetailComponent } from './ability-detail.component';

describe('AbilityDetailComponent', () => {
  let component: AbilityDetailComponent;
  let fixture: ComponentFixture<AbilityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilityDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
