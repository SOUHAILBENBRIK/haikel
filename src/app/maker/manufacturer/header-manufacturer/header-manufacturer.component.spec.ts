import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderManufacturerComponent } from './header-manufacturer.component';

describe('HeaderManufacturerComponent', () => {
  let component: HeaderManufacturerComponent;
  let fixture: ComponentFixture<HeaderManufacturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderManufacturerComponent]
    });
    fixture = TestBed.createComponent(HeaderManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
