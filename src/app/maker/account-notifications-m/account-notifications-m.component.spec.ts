import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNotificationsMComponent } from './account-notifications-m.component';

describe('AccountNotificationsMComponent', () => {
  let component: AccountNotificationsMComponent;
  let fixture: ComponentFixture<AccountNotificationsMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountNotificationsMComponent]
    });
    fixture = TestBed.createComponent(AccountNotificationsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
