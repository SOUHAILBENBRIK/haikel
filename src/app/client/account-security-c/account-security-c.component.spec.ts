import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSecurityCComponent } from './account-security-c.component';

describe('AccountSecurityCComponent', () => {
  let component: AccountSecurityCComponent;
  let fixture: ComponentFixture<AccountSecurityCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSecurityCComponent]
    });
    fixture = TestBed.createComponent(AccountSecurityCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
