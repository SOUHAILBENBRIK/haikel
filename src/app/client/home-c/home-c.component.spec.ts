import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCComponent } from './home-c.component';

describe('HomeCComponent', () => {
  let component: HomeCComponent;
  let fixture: ComponentFixture<HomeCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCComponent]
    });
    fixture = TestBed.createComponent(HomeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
