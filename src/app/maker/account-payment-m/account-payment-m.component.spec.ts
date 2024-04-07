import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPaymentMComponent } from './account-payment-m.component';

describe('AccountPaymentMComponent', () => {
  let component: AccountPaymentMComponent;
  let fixture: ComponentFixture<AccountPaymentMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountPaymentMComponent]
    });
    fixture = TestBed.createComponent(AccountPaymentMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
