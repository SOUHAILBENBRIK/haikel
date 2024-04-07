import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNotificationsCComponent } from './account-notifications-c.component';

describe('AccountNotificationsCComponent', () => {
  let component: AccountNotificationsCComponent;
  let fixture: ComponentFixture<AccountNotificationsCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountNotificationsCComponent]
    });
    fixture = TestBed.createComponent(AccountNotificationsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
