import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystmecommendComponent } from './systmecommend.component';

describe('SystmecommendComponent', () => {
  let component: SystmecommendComponent;
  let fixture: ComponentFixture<SystmecommendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystmecommendComponent]
    });
    fixture = TestBed.createComponent(SystmecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
