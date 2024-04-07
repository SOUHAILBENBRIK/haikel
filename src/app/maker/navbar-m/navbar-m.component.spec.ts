import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMComponent } from './navbar-m.component';

describe('NavbarMComponent', () => {
  let component: NavbarMComponent;
  let fixture: ComponentFixture<NavbarMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarMComponent]
    });
    fixture = TestBed.createComponent(NavbarMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
