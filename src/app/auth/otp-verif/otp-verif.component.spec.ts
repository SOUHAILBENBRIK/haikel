import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerifComponent } from './otp-verif.component';

describe('OtpVerifComponent', () => {
  let component: OtpVerifComponent;
  let fixture: ComponentFixture<OtpVerifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpVerifComponent]
    });
    fixture = TestBed.createComponent(OtpVerifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
