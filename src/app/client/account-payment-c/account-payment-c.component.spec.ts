import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPaymentCComponent } from './account-payment-c.component';

describe('AccountPaymentCComponent', () => {
  let component: AccountPaymentCComponent;
  let fixture: ComponentFixture<AccountPaymentCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountPaymentCComponent]
    });
    fixture = TestBed.createComponent(AccountPaymentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
