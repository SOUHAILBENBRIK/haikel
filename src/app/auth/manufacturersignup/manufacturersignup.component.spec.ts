import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersignupComponent } from './manufacturersignup.component';

describe('ManufacturersignupComponent', () => {
  let component: ManufacturersignupComponent;
  let fixture: ComponentFixture<ManufacturersignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturersignupComponent]
    });
    fixture = TestBed.createComponent(ManufacturersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
