import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutmakerComponent } from './layoutmaker.component';

describe('LayoutmakerComponent', () => {
  let component: LayoutmakerComponent;
  let fixture: ComponentFixture<LayoutmakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutmakerComponent]
    });
    fixture = TestBed.createComponent(LayoutmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
