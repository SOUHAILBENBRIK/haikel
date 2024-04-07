import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSecurityMComponent } from './account-security-m.component';

describe('AccountSecurityMComponent', () => {
  let component: AccountSecurityMComponent;
  let fixture: ComponentFixture<AccountSecurityMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSecurityMComponent]
    });
    fixture = TestBed.createComponent(AccountSecurityMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
