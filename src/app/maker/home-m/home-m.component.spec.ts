import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMComponent } from './home-m.component';

describe('HomeMComponent', () => {
  let component: HomeMComponent;
  let fixture: ComponentFixture<HomeMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMComponent]
    });
    fixture = TestBed.createComponent(HomeMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
