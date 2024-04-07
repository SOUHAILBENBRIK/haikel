import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutmanufacturerComponent } from './layoutmanufacturer.component';

describe('LayoutmanufacturerComponent', () => {
  let component: LayoutmanufacturerComponent;
  let fixture: ComponentFixture<LayoutmanufacturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutmanufacturerComponent]
    });
    fixture = TestBed.createComponent(LayoutmanufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
